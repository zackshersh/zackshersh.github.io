import React, { useContext, useState } from 'react';
import Title from './Title';
import Projects from './Projects';

import SelectedProjectContext from './Scripts/selectedproject-context';

import ProjectCard from './ProjectCard';
import ContactAboutContent from './ContactAboutContent';

function Content({styles, mediaState, activeContentGetSet}) {

    const { selectedProject, setSelectedProject } = useContext(SelectedProjectContext);

    const [canAutoScroll, setCanAutoScroll] = useState(true);

    const [scrollInterval, setScrollInterval] = useState(setInterval(() => {
        let selectedProject = document.querySelector(".active");
        if(selectedProject && canAutoScroll){
            selectedProject.scrollIntoView({behavior:"smooth",block:"nearest"});
        }
    },1000))


    return (
        <div className={`Content border-r border-black ${styles} overflow-scroll p-8`}>
                <Title selectedProject={selectedProject} />

                <div className='Spacer min-h-4'></div>
                
                <ProjectCard index={-1} title={"More About Me →"} setMedia={mediaState.set} setActiveContent={activeContentGetSet.set} selectedProject={selectedProject} setSelectedProject={setSelectedProject}>
                    <ContactAboutContent />
                    <span className='hidden'></span>
                </ProjectCard>
                <div className='Spacer min-h-8'></div>
                <Projects selectedProject={selectedProject} setSelectedProject={setSelectedProject} activeContentGetSet={activeContentGetSet} mediaState={mediaState} />
        </div>
    );
}

export default Content;