import React from 'react';

function ProjectMediaContainer({children}) {
    return (
        <div className='flex flex-wrap justify-around *:w-2/5 *:sm:w-3/4 *:md:w-2/5 *:max-w-2/5'>
            {children}
        </div>
    );
}

export default ProjectMediaContainer;