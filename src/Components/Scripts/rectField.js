import perlinNoise3d from 'perlin-noise-3d';
import Perlin from './customPerlin';
import RectanglePattern from './rectanglePattern';

import possibleColors from "./colors.json";

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

Number.prototype.clamp = function (min, max) {
    return this <= min ? min : this >= max ? max : this;
}

const noise = new perlinNoise3d();
// noise.noiseSeed(251);

// const noise = new Perlin();

class RectField{
    constructor(){
        this.ctx = null;
        this.elem = null;

        this.xSpacing = 28;
        this.ySpacing = 36;
        this.gridBlocks = [];

        this.margin = 1;

        this.noiseScale = 0.001;
        this.timeScale = 0.005;

        // for calculating noise tables, will clear noise tables if it is a new frame
        this.currentFrame = 0;
        this.frameCount = 0;

        this.mouse = {
            x: 0,
            y: 0
        }

        this.rectPositionsByIndex = [];
        this.noiseTables = {};

        this.rectPattern = new RectanglePattern(this);
        this.useRectPattern = false;
    }

    init(ctx, elem,customVal){
        this.gridBlocks = [];
        this.ctx = ctx;
        this.elem = elem;

        this.customVal = customVal;

        let i = 0;
        for(let y=this.margin; y<this.elem.height; y += this.ySpacing){
            for(let x=this.margin; x<this.elem.width; x += this.xSpacing){
                let rndm = Math.random();

                let length = 1;

                // if (rndm > 0.9){
                //     length = 4;
                // } else {
                //     length = 1;
                // }

                this.gridBlocks.push(new GridRect(i,x,y,this.xSpacing*length,this.ySpacing,this.ctx,this,length,this.timeScale,i == 45));
                x += this.xSpacing*(length-1);




                i++;
            }
        }

        elem.addEventListener("mousemove",(e) => {
            this.mouse = {
                x: e.clientX,
                y: e.clientY
            }
        })

    }

    handleResize(){
        if(this.ctx){
            this.init(this.ctx, this.elem, this.customVal);
        }
    }

    render(deltaTime){
        this.frameCount++;
        this.gridBlocks.forEach((block) => {
            block.updateAndDraw(deltaTime);
        })
    }

    // precalculates all noise values all at once and performs blurs so that individual rects don't have to do all by themselves
    referenceNoiseTable(x,y,z){
        // let table = this.getTableAtZ(z);

        // let o = this.customVal ? 0.01 : 0.01;
        // let tableZMinus = this.getTableAtZ(z-o);
        // let tableZPlus = this.getTableAtZ(z+o);

        let avg = 0;

        // how far back and forward will be sampled from
        let blurDepth = 2;
        let stepSize = 0.2;

        for(var i=0;i<(blurDepth*2)+1;i++){
            let table = this.getTableAtZ(z + ((i*stepSize)-(stepSize*blurDepth)));
            let row = table[Math.floor(y/this.ySpacing)];
            let val = row[Math.floor(x/this.xSpacing)];
            avg += val;
        }

        avg /= (blurDepth*2)+1;

        // let table = this.getTableAtZ(z);
        // let row = table[Math.floor(y/this.ySpacing)];
        // let val = row[Math.floor(x/this.xSpacing)];

        return avg;
    }

    getTableAtZ(z){
        let tableAtZ = this.noiseTables[JSON.stringify(z)];
        if(tableAtZ) { return tableAtZ };

        if(this.currentFrame != this.frameCount){
            this.currentFrame = this.frameCount;
            this.noiseTables = {};
        }
        let table = [];

        // generating a new table
        for(var y=0;y<this.elem.height;y += this.ySpacing){
            let row = [];
            for(var x=0; x<this.elem.width; x += this.xSpacing){
                row.push(this.noiseAtCoords(x,y,z));
            }
            table.push(row);
        }


        table = this.applyBlur(table);

        this.noiseTables[JSON.stringify(z)] = table;
        return table;
        // console.log(table)

    }

    applyBlur(table){


        let newTable = [];

        let sampleOffset = 30;
        let xyAvg = (this.xSpacing + this.ySpacing)/2;
        sampleOffset = Math.round(sampleOffset/xyAvg);

        for(var y=0; y < table.length; y++){
            let row = table[y];
            let newRow = [];
            for(var x=0; x < row.length; x++){

                let CC = table[y][x];

                let UL, UU, UR;
                let CL, CR;
                let BL, BB, BR;

                UL = table[(y-sampleOffset).clamp( 0, table.length-1)][( x-sampleOffset ).clamp( 0, row.length-1)];
                UU = table[(y-sampleOffset).clamp( 0, table.length-1)][( x ).clamp( 0, row.length-1)];
                UR = table[(y-sampleOffset).clamp( 0, table.length-1)][( x+sampleOffset ).clamp( 0, row.length-1)];
                CL = table[(y).clamp( 0, table.length-1)][( x-sampleOffset ).clamp( 0, row.length-1)];
                CR = table[(y).clamp( 0, table.length-1)][( x+sampleOffset ).clamp( 0, row.length-1)];
                BL = table[(y+sampleOffset).clamp( 0, table.length-1)][( x-sampleOffset ).clamp( 0, row.length-1)];
                BB = table[(y+sampleOffset).clamp( 0, table.length-1)][( x ).clamp( 0, row.length-1)];
                BR = table[(y+sampleOffset).clamp( 0, table.length-1)][( x+sampleOffset ).clamp( 0, row.length-1)];

                let totalWeights = 0;
                
                CC *= 2.5; totalWeights += 2.5;

                UU *= 1.625; totalWeights += 1.625;
                CL *= 1.625; totalWeights += 1.625;
                CR *= 1.625; totalWeights += 1.625;
                BB *= 1.625; totalWeights += 1.625;

                UL *= 1; totalWeights += 1;
                UR *= 1; totalWeights += 1;
                BL *= 1; totalWeights += 1;
                BR *= 1; totalWeights += 1;


                let avg = UL + UU + UR + CL + CC + CR + BL + BB + BR;
                avg /= totalWeights;
                newRow.push(avg);
            }
            newTable.push(newRow);
        }

        return newTable;
    }

    noiseAtCoords(x,y,z){
        // let noiseVal = noise.get((x*this.noiseScale),y*this.noiseScale,z);
        let noiseVal;
        if(this.useRectPattern){
            noiseVal = this.rectPatternAtCoords(x,y,z);
        } else {
            noiseVal = noise.get((x*this.noiseScale),y*this.noiseScale,z);

        }
        return noiseVal;
    }

    rectPatternAtCoords(x,y,z){
        let val = this.rectPattern.get(x,y,z);
        val = Math.abs(val).clamp(0,1);
        return val;
    }


}

class GridRect{
    constructor(i,x,y,w,h,ctx,parent,relativeScale,timeScale,consolePrivileges=false){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.index = i;

        this.relativeScale = relativeScale;
        this.consolePrivileges = consolePrivileges;
        
        this.ctx = ctx;
        this.parent = parent;

        this.t = 1;
        this.tStep = 0.2;


        this.hasShiftedEver = false;

        // can shift color if it has been long enough since the last shift
        this.ticksSinceLastShift = 200;
        this.ticksBeforeNextShift = 200;

        this.ticks2 = 0;
        this.t2Threshold = 420;
        this.countdownMode = false;


        // if it reaches a certain width, the speed at which it recovers to be able to shift again increases
            // allows a higher time before next shift to prevent flukes but stops obvious shifts from being prevented
        this.widthToIncreaseTickRate = 0.8;
        this.tickRateIncreaseFactor = 4;


        this.margin = 2;

        this.noiseScale = 0.0016;
        this.timeScale = timeScale;
        // makes noise gradient much harsher
        this.aggresiveShiftFactor = 18;

        this.sharpnessFactor = 0.7;

        this.timesReached0 = 0;
        this.atZero = false;


    }

    updateAndDraw(deltaTime){
        
        if(this.tStep*deltaTime){
            this.t += this.tStep * deltaTime;
        }

        this.drawSelf();
    }


    drawSelf(){

        function wCalc(x,y,z,parent){
            let noiseVal = parent.getNoiseAtCoords(x,y,z);
            let w = noiseVal;
  
            w *= parent.aggresiveShiftFactor;
            w -= parent.aggresiveShiftFactor/2;

            w = w.map(0,1,-1*parent.sharpnessFactor,1 + parent.sharpnessFactor)
            w = w.clamp(0,1);



            w = Math.abs(w-0.5)*2;
            // w = Math.abs(w);

            // pulling lower values down to create a wider moving gap
            // w = w - (1-w)/4;

            w *= parent.parent.xSpacing;

            return w;
        }



        // can be changed by the current moment width check (w) or the width checks looking into the past moments
        let reachedZeroAtOnePoint = false;
        // value so that if something had reached zero but rushed past it, it'll be caught
        let zeroMargin = 4;
        let w = wCalc(this.x,this.y,(this.t*this.timeScale),this);

        if(w <= zeroMargin) reachedZeroAtOnePoint = true;
        
        // CHECKING IF IN TIME BETWEEN THIS FRAME AND LAST IT REACHED 0
        let backwardsSubstepCount = 6;
        for(var i=0; i<backwardsSubstepCount; i++){
            let w_ = wCalc(this.x,this.y,(this.t*this.timeScale) - ((this.timeScale/backwardsSubstepCount)*i),this);
            if(w_ <= zeroMargin) reachedZeroAtOnePoint = true;
        }

        if(w > this.widthToIncreaseTickRate){
            this.ticksSinceLastShift += this.tickRateIncreaseFactor;

        } else {
            this.ticksSinceLastShift++;

        }


        this.ticks2++;
        
        if(this.countdownMode){
            if(this.ticks2 > this.t2Threshold){
                if(this.timesReached0 > 0 && this.timesReached0 != 4){
                    this.timesReached0--;
                }
                this.ticks2 = 0;
            }
        }
        

        // BEHAVIOR IF AT ZERO
        if(reachedZeroAtOnePoint && !this.atZero){
            this.atZero = true;
        } else if(w > zeroMargin){
            if(this.atZero){
                if(this.ticksSinceLastShift > this.ticksBeforeNextShift ){

                    if(this.timesReached0 < 4 && this.countdownMode){
                        this.timesReached0++;
                    } else {
                        this.timesReached0++;

                    }
                    this.ticks2 = 0;
                    this.ticksSinceLastShift = 0;
                    this.hasShiftedEver = true;
                    
                }
            }
            this.atZero = false;
        }

        w *= this.relativeScale
        w -= this.margin;
        w = w.clamp(0,10000);


        let h = this.h;
        h -= this.margin;
        h = h.clamp(0,10000);

        // if(reachedZeroAtOnePoint){
        //     w = this.parent.xSpacing - this.margin;
        //     h = this.parent.ySpacing*0.1
        // }
        
        // h = (this.ticksSinceLastShift/this.ticksBeforeNextShift) * this.h;
        // h = h.clamp(0,this.h)
        // h -= this.margin;
        
        // let possibleColors = ["rgb(250, 250, 249)","red","yellow","green","blue"];

        // if(this.timesReached0 == 4){
        //     // this.ctx.fillStyle = "blue";

        // } else {
            this.ctx.fillStyle = possibleColors[this.timesReached0%possibleColors.length];

        // }
        this.ctx.strokeStyle = possibleColors[this.timesReached0%possibleColors.length];


        // if(this.ticksBeforeNextShift < this.ticksSinceLastShift-2){
        //     this.ctx.strokeRect(this.x,this.y, w, h);

        // } else {
        this.ctx.fillRect(this.x,this.y, w, h);
        // this.ctx.fill();

        // }




    }

    getSlope(x,y,z){
        let d = 8;
        let xSlope = this.getNoiseAtCoords(x-d,y,z) - this.getNoiseAtCoords(x+d,y,z);
        let ySlope = this.getNoiseAtCoords(x,y-d,z) - this.getNoiseAtCoords(x,y+d,z);
        return Math.abs((xSlope+ySlope)*100);
    }

    getNoiseAtCoords(x,y,z){

        // let noiseVal
        // if(this.parent.customVal){
        //     noiseVal = noise.get((x*this.noiseScale),y*this.noiseScale,z);

        // } else {

        let noiseVal = this.parent.referenceNoiseTable(x,y,z);


        // }

        return noiseVal
    }

    downsample(a,b){
        return Math.floor(a/b)*b;
    }



    getColorAtVal(a){

        a *= 0.2;
        let r = this.normSin(a) * 255;
        let g = this.normSin(a+0.3) * 255;
        let b = this.normSin(a+0.6) * 255;


        return `rgb(${r},${g},${b})`

    }

    normSin(a){
        return (Math.sin(a)/2)+0.5;
    }

    lerp( a, b, alpha ) {
        return a + alpha * ( b - a )
    }

}

export default RectField;