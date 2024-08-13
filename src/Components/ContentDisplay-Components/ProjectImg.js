import React, { useState } from 'react';
import ProjectCaption from './ProjectCaption';

function ProjectImg({src, specialMaxW="1_5", wider,caption}) {

    const [magnified, setMagnified] = useState(false);

    const mouseDown = () => {
        // setMagnified(!magnified)
    }

    return (
        <div className={`my-3 z-40 w-3/4 flex items-center flex-col justify-center max-w-1/2`}>
            <img onMouseDown={mouseDown} className={`Project-Img max-w-full max-h-full object-contain rounded-md`} src={`./assets/media/${src}`} />
            {caption ? <ProjectCaption>{caption}</ProjectCaption>:""}

        </div>
    );
}

export default ProjectImg;