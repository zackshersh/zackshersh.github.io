import React from 'react';

function ProjectSubheading({children}) {
    return (
        <div className='w-full mt-9'>
            <hr className='border-stone-700'></hr>
            <h3 className='text-stone-300 text-xl mt-2'>{children}</h3>
        </div>
    );
}

export default ProjectSubheading;