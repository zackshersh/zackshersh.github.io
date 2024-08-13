import React from 'react';
import ProjectCaption from './ProjectCaption';

function ProjectVideo({ src, caption, small }) {
    return (
        <div className={`flex items-center flex-col ${ small ? "w-1/2" : "w-3/4"} my-3 max-w-1/2`}>
            <video muted className={`Project-Video mb-2 w-full z-40 rounded-md`} autoPlay loop>
                <source src={`./assets/media/${src}`} type="video/webm"/>
            </video>
                {caption ? <ProjectCaption>{caption}</ProjectCaption>:""}
        </div>
    );
}

export default ProjectVideo;