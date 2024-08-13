import React from 'react';

function ProjectCaption({children}) {
    return (
        <div className='w-full'>
            <p className='text-stone-500 text-sm'>{children}</p>
        </div>
    );
}

export default ProjectCaption;