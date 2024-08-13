import React from 'react';

function ProjectText({children}) {
    return (
        <p className='Project-Text text-stone-100 text-[0.9rem] mt-3 pl-1 font-light font-body w-full tracking-wide'>{children}</p>
    );
}

export default ProjectText;