import React from 'react';

function ProjectInfoContainer({children}) {
    return (
        <div className='z-0 bg-stone-800 py-4 px-3 mb-3 sm:mt-4 rounded-md'  style={{top:0}}>
            {children}
        </div>
    );
}

export default ProjectInfoContainer;