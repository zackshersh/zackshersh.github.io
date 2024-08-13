import GrowingBlocks from "./growingBlocks";
import RectField from "./rectField";

class CanvasManager {
    constructor(){
        this.elem = undefined;
        this.ctx = undefined;

        this.frameCount = 0;

        this.active = true;

        this.initOccured = false;

        this.lastTimestamp = 0;

        // this.possibleColors = ["red","blue","green","yellow"]

        // this.pattern = new GrowingBlocks();
        this.pattern = new RectField();
    }

    init(elem, customVal){
        if(this.initOccured) return;
        this.initOccured = true;
        this.elem = elem;
        this.ctx = elem.getContext("2d");

        this.customVal = customVal;
 
        window.addEventListener("resize", this.updateSize.bind(this));
        this.updateSize();

        if(this.pattern) this.pattern.init(this.ctx,this.elem,customVal);



        this.render();


    }

    updateSize(){
        setTimeout(() => {
            let correctSize = document.querySelector(".Content-Display").getBoundingClientRect();
            this.resizeCanvas(correctSize.width, correctSize.height);
            this.pattern.handleResize();
        },100)
    }

    resizeCanvas(w,h){
        this.elem.width = w;
        this.elem.height = h;
    }

    stop(){
        this.active = false;
    }

    start(){
        this.active = true;
        this.render();
    }

    render(timestamp){

        let deltaTime;
        if(timestamp != undefined){
            deltaTime = timestamp - this.lastTimestamp;
            this.lastTimestamp = timestamp;
        }

        if(deltaTime != 0){

            
            this.frameCount++;
            this.ctx.clearRect(0,0,this.elem.width,this.elem.height);
            
            if(this.pattern) this.pattern.render(deltaTime);
            
            if(this.active == false) return;
            
            requestAnimationFrame(this.render.bind(this));
        }
    }
}


export default CanvasManager;