import React, { useEffect, useRef, useState } from 'react';
import CanvasManager from './Scripts/canvasManager';

function Canvas({hidden,val}) {

    const canvasRef = useRef(0);
    const [canvasManager,setCanvasManager] = useState(new CanvasManager());

    useEffect(() => {
        canvasManager.init(canvasRef.current,val);
    },[])

    useEffect(() => {
        if(hidden){
            canvasManager.stop();
        } else {
            canvasManager.start();
        }
    },[hidden])
    return (
        <div className='flex row overflow-hidden'>
            <canvas style={{
            }} ref={canvasRef} className={`${!hidden ? "block" : "hidden"}`}></canvas>
        </div>
    );
}

export default Canvas;