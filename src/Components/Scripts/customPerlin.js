
class Perlin {
    constructor(){
        this.seed = 0;
        this.scale = 0.05;
    }

    get(x,y,z,consolePrivileges = false){
        x *= this.scale; y *= this.scale; z *= this.scale;

        let rectCorner = new v3(this.ds(x,4),this.ds(y,4),this.ds(z,4));
        if(Math.floor(x) == 3){
            return 1;
        } else {
            return 0;
        }

        // if(consolePrivileges) console.log(rectCorner)

        // return Math.sin(rectCorner.x);
    }

    //downsample
    ds(a,b){
        return Math.floor(a/b)*b;
    }
}

class v3{
    constructor(x,y,z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
}

export default Perlin;