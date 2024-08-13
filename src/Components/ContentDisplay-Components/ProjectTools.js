import React from 'react';

function ProjectTools({str}) {
    return (
        <div className='Project-Tools w-full mt-5'>
            <hr className='border-stone-700' />
            <p className='text-stone-400 text-sm mt-2 italic'>{str}</p>

        </div>
    );
}

export default ProjectTools;