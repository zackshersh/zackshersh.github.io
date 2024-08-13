import React, { useState } from 'react';

function ProjectDetails({year, projectType, links}) {

    const [truncatedUrl, setTruncatedUrl] = useState(true);

    return (
        <div className='Project-Details w-full mb-5 mt-2 pl-1'>
            {/* <hr className='border-stone-400' /> */}
            {year && projectType ? <p className='text-stone-400'>
                <span className='font-bold'>{projectType}</span>, {year}</p>:""}
            {links ? links.map((link,i) => {
                return (<p className={`text-stone-400 text-sm ${i == 0 ? "mt-1":""}`} key={i}>{link.name}
                : <a target='_blank' className='underline font-normal' href={link.url}>
                    {truncatedUrl && link.shortUrl ? link.shortUrl : link.url}
                </a>
                {truncatedUrl && link.shortUrl ? <span className='inline-block ml-1 text-stone-200 cursor-pointer'
                onMouseDown={() => setTruncatedUrl(false)}>...</span> : ""}

                </p>)
            }):""}
        </div>
    );
}

export default ProjectDetails;