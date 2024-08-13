import React, { useEffect, useRef } from 'react';
import Canvas from './Canvas';

function ContentDisplay({styles, mediaState, activeContentGetSet,val, setSelectedProject}) {

    const fullMediaContainer = useRef(0);
    const parentContainer = useRef(0);

    const generateMediaElem = (path,i) => {
        let format = path.split(".")[1];

        if(format == "jpeg" || format == "webp"){
            return <img className={`mb-3 w-3/4 lg:w-1/3`} id={i} key={i} src={`./assets/media/${path}`} />
        } else if (format == "webm"){
            return <video className={`mb-3 w-3/4`}  autoPlay loop id={i} key={i}>
                <source src={`./assets/media/${path}`} type="video/webm"/>
            </video>
        }
    }

    const generateAllElems = () => {
        return activeContentGetSet.get.map((component,i) => {
            return (component)
        })
    }

    useEffect(() => {
        parentContainer.current.scrollTop = 0;
    }, [activeContentGetSet.get])



    return (
        <div ref={parentContainer} className={`Content-Display ${styles} bg-stone-900 flex flex-col overflow-scroll`}>
            <div ref={fullMediaContainer} className={`relative pt-3 pb-24 px-6 flex flex-col flex-wrap min-w-[50vw] ${activeContentGetSet.get.length ? "block" : "hidden"}`}>
                <h3 className='mb-3 w-full sm:hidden text-stone-200' onMouseDown={() => {
                    activeContentGetSet.set([]);
                    setSelectedProject(null)
                }}>← Back</h3>

                {activeContentGetSet.get ? 
                activeContentGetSet.get
                : null}
            </div>
            <Canvas val={val} hidden={activeContentGetSet.get.length ? true : false} />
        </div>
    );
}

export default ContentDisplay;