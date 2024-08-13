import React, { useEffect, useRef, useState } from 'react';

function MediaDisplay({styles,mediaState}) {


    const [activeIndex, setActiveIndex] = useState(0);
    const [triggerRerender, setTriggerRerender] = useState(0);


    const contRef = useRef(0);

    const mediaHeights = useRef(new Array(16));

    const minorContRef = useRef(0);



    // const mediaOnload = (e) => {
    //     console.log(e.target)
    //     let height = e.target.offsetHeight;
    //     mediaHeights.current[e.target.id] = height;
    //     console.log(mediaHeights)
    // }

    const mediaOnLoad = (e) => {
        let rect = e.target.getBoundingClientRect();
        mediaHeights.current[e.target.id] = Math.floor(rect.height);
    }

    const generateMediaElem = (path,i) => {
        let format = path.split(".")[1];

        if(format == "jpeg" || format == "webp"){
            return <img className={`mb-3 ${activeIndex == i ? "opacity-100" : "opacity-50"}`} onLoad={mediaOnLoad} id={i} key={i} src={`./assets/media/${path}`} />
        } else if (format == "webm"){
            return <video className={`mb-3 ${activeIndex == i ? "opacity-100" : "opacity-50"}`} onLoadedMetadata={mediaOnLoad} autoPlay loop id={i} key={i}>
                <source src={`./assets/media/${path}`} type="video/webm"/>
            </video>
        }
    }

    const incrementIndex = (mediaState) => {
        // setActiveIndex((activeIndex + val)%3);
        console.log(mediaState)
        // if(activeIndex >= mediaState.val.length-1){
        //     setActiveIndex(0);
        // } else {
        setActiveIndex(activeIndex+1); 
        // }

        console.log(activeIndex)
    }

    useEffect(() => {
        // calcHeights();
        centerActiveIndex();

        const handleResize = () => {

            // calcHeights();
            centerActiveIndex();

            // setTriggerRerender(triggerRerender+1);
        };
        window.addEventListener('resize',handleResize)

        const interval = setInterval(() => {
            console.log("AUTO INCREMENT");
            console.log(mediaState)
            incrementIndex(mediaState);
        },3000);

        return () => {clearInterval(interval)};

    },[])

    useEffect(() => {
        centerActiveIndex()

    },[activeIndex])

    const centerActiveIndex = () => {

        calcHeights();

        let height = window.innerHeight;
         
        let acc = 0;
 
        if(!minorContRef.current.childNodes) return;

        for(var i=0;i<activeIndex;i++){
            // console.log(mediaHeights.current[i]);
            acc -= mediaHeights.current[i];
        }


        let offset = (height/2) + acc - mediaHeights.current[activeIndex]/2;
        minorContRef.current.style.transform = `translateY(${offset}px)`
    }

    const calcHeights = () => {
        if(minorContRef.current.childNodes){
            minorContRef.current.childNodes.forEach((child) => {
                mediaHeights.current[child.id] = Math.floor(child.getBoundingClientRect().height);
            })

        } else {
            mediaHeights.current = [];
        }
        // console.log(mediaHeights.current);
    }

    return (
        <div onMouseDown={() => incrementIndex(mediaState)} ref={contRef} className={`Media-Display bg-black ${styles} overflow-hidden`}>
            <div ref={minorContRef}>
                {mediaState.val ? mediaState.val.map((path,i) => {
                    return (generateMediaElem(path,i))
                }):null}
            </div>
        </div>
    );
}

export default MediaDisplay;