import React from 'react';

function ProjectBanner({fileName}) {
    return (
        <div style={{backgroundImage:`url(./assets/media/${fileName}`}} className='min-w-full min-h-12 mt-[-2.5rem] ml-[-2.5rem] mr-[-2.5rem]'></div>
    );
}

export default ProjectBanner;