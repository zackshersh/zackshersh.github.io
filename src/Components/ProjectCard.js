import React, { useEffect, useState } from 'react';
import TagLabel from './TagLabel';

function ProjectCard({title,tags,children,index,selectedProject,setSelectedProject, setMedia, mediaPaths,setActiveContent,content, highlightedProject}) {

    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);

    const titleClick = (e) => {

        if(active){
            setHover(false);
            setSelectedProject(null);
            setMedia([]);
            setActiveContent([]);
        } else {
            setSelectedProject(index);
            setMedia(mediaPaths)
            setActiveContent(children);
        }

        // e.target.scrollIntoView({
        //     behavior: 'smooth'
        // });
        // setActive(!active);
    }

    useEffect(() => {
        if(selectedProject != index){
            setActive(false);
        } else {
            setActive(true);
        }
    })

    return (
        <div className={`Project-Card ${hover || active ? "hovered" : ""}  ${active ? "active my-2" : "mt-1"} ${selectedProject == index || selectedProject == null || hover ? "opacity-100" : "opacity-50"} z-10 relative cursor-pointer`}
            onMouseEnter={() => {
                setHover(true);
            }} 
            onMouseLeave={() => {
                setTimeout(() => {setHover(false);},100)

            }}
        >
            <a onMouseDown={titleClick} className={`ProjectCard-Title leading-tight ${ active ? "text-2xl" : "text-2xl"} font-normal`} id={`cardtitle-${index}`}>{title}</a>
            <div className='Tags-Cont-Mask'>
                <div onMouseDown={titleClick} className={`flex flex-wrap Tags-Cont`}>
                    {tags ? tags.map((tag,i) => {
                        return (<TagLabel key={i} name={tag} />)
                    }):null}
                </div>

            </div>
            {/* <div className='Body-Container'>
                <div className='Body p-2 pl-5 pt-4 *:mb-4 *:leading-tight'>

                </div>   
            </div> */}
        </div>
    );
}

export default ProjectCard;