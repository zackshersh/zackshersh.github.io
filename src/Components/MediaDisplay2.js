import React from 'react';

function MediaDisplay2({styles, mediaState}) {

    const generateMediaElem = (path,i) => {
        let format = path.split(".")[1];

        if(format == "jpeg" || format == "webp"){
            return <img className={`mb-3 w-3/4`} id={i} key={i} src={`./assets/media/${path}`} />
        } else if (format == "webm"){
            return <video className={`mb-3 w-3/4`}  autoPlay loop id={i} key={i}>
                <source src={`./assets/media/${path}`} type="video/webm"/>
            </video>
        }
    }

    return (
        // Scroll receiver grows to cover whole screen when activated so that scrolling anywhere will scroll the media display
        <div className={`Scroll-Receiver ${styles} overflow-scroll z-0 ${mediaState.val.length ? "absolute w-screen h-screen flex justify-end":"relative w-1/2"}`}>
            <div className={`Media-Display2 bg-black min-h-full flex py-6 ${mediaState.val.length ? "w-1/2":"w-full"}`}>
                {mediaState.val ? mediaState.val.map((path,i) => {
                    return (generateMediaElem(path,i))
                }):null}
            </div>
        </div>
    );
}

export default MediaDisplay2;