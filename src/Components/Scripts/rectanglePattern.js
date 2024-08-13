import perlinNoise3d from 'perlin-noise-3d';

class RectanglePattern {
    constructor(parent){
        this.parent = parent;
        this.seed = Math.random() * 255;

        this.noise = new perlinNoise3d();
        // this.noise.noiseSeed(237);

        this.rectCount = 3;

        // how many pixels to reach 1
        this.scale = 80;

    }

    get(x,y,z){

        let rectX = 300;
        let rectY = 300;

        z *= 1

        let weight = this.noise.get(z,120,120) > 0.5 ? 1 : 0;

        rectX += this.noise.get(z,4,10).map(0,1,-300,800) * weight;
        rectY += this.noise.get(z,40,15).map(0,1,-800,500) * (1-weight);


        let relX = x - rectX;
        let relY = y - rectY;

        let rW = 400// * this.noise.get(z/2,40,40);

        let val = this.rectangle(relX,relY,rW,300);
        val = Math.abs(val);

        // val /= this.scale;
        // val -= 0.2
        val = val.map(0,100,0.0,1);

        return val;
    }



    rectangle(posX,posY,rHW, rHH){

        let componentWiseEdgeDistance = {
            x: Math.abs(posX) - rHW,
            y: Math.abs(posY) - rHH
        }

        let ced = componentWiseEdgeDistance;

        let a = {
            x: Math.max(ced.x,0),
            y: Math.max(ced.y,0)
        }

        let outsideDistance = Math.sqrt(a.x*a.x + a.y*a.y);
        let insideDistance = Math.min(Math.max(ced.x,ced.y),0);

        return outsideDistance + insideDistance;

        // float2 componentWiseEdgeDistance = abs(samplePosition) - halfSize;
        // float outsideDistance = length(max(componentWiseEdgeDistance, 0));
        // float insideDistance = min(max(componentWiseEdgeDistance.x, componentWiseEdgeDistance.y), 0);
        // return outsideDistance + insideDistance;
    }


}

export default RectanglePattern;