class GrowingBlocks {
    constructor() {
        this.ctx = null;
        this.elem = null;
        this.gridBlocks = [];

        this.xSpacing = 32;
        this.ySpacing = 12;
        this.gridBlocks = [];

        this.initialTRange = 12;
        this.typeCount = 3;
    }

    init(ctx,elem){
        this.ctx = ctx;
        this.elem = elem;

        for(let y=0; y<this.elem.height; y += this.ySpacing){
            for(let x=0; x<this.elem.width; x += this.xSpacing){
                // let color = this.possibleColors[Math.floor(this.possibleColors.length * Math.random())];
                this.gridBlocks.push(new GridBlock(x,y,this.xSpacing,this.ySpacing,
                    Math.random() * this.initialTRange * -1, this.ctx,
                    Math.floor(this.typeCount * Math.random())))
            }
        }

        console.log(this.gridBlocks)
    }

    render(){
        this.gridBlocks.forEach((block) => {
            block.updateAndDraw();
        })
    }
    
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

class GridBlock {
    constructor(x, y, w, h, initialT, ctx, type){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.type = type;

        this.complete = false;

        this.t = initialT;

        this.tStep = 0.003;

        this.ctx = ctx;

        this.color = `hsla(${Math.random()*100},100%,50%,1)`;
    }

    updateAndDraw(){
        this.t += this.tStep;

        if(this.complete) return;

        let clampedT = 0;

        if(this.t <= 0){
            clampedT = 0;
            return;
        } else if (this.t >= 1){
            clampedT = 1;
            this.complete = true;
            return;
        } else {
            clampedT = this.t;
        }

        clampedT = this.easeInOut(clampedT)


        let displayW = clampedT.map(0,1,0,this.w);
        let displayH = this.h;


        let rectX = (this.x + (this.w/2)) - (displayW/2);
        let rectY = (this.y + (this.h/2)) - (displayH/2);

        // switch(this.type){
            // case 0:
        this.drawSolid(rectX,rectY,displayW,displayH);
        // }
    }
    
    drawSolid(rectX,rectY,rectW,rectH){
        // this.ctx.fillStyle = "#FF4444"
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(rectX,rectY,rectW,rectH);
    }

    map(val,in_min, in_max, out_min, out_max) {
        return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
      }

    easeInOut(t){
        return t > 0.5 ? 4*Math.pow((t-1),3)+1 : 4*Math.pow(t,3);
    }
}


export default GrowingBlocks;