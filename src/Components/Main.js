import React, { createContext, useEffect, useState } from 'react';
import Title from './Title';
import MediaDisplay from './MediaDisplay';
import Content from './Content';
import MediaDisplay2 from './MediaDisplay2';
import ContentDisplay from './ContentDisplay';

import SelectedProjectContext from './Scripts/selectedproject-context';

function Main(props) {

    const [mediaPaths, setMediaPaths] = useState([]);
    const mediaPathState = {
        val: mediaPaths,
        set: setMediaPaths
    };

    const [activeContent, setActiveContent] = useState([]);
    const activeContentGetSet = {
        get: activeContent,
        set: setActiveContent
    }

    const [selectedProject, setSelectedProject] = useState(null);
    const sProjGetSet = {
        selectedProject: selectedProject, 
        setSelectedProject: setSelectedProject,
        activeContent: activeContent,
        setActiveContent: setActiveContent
    };



    return (
        <div className='Main flex flex-col sm:flex-row h-screen bg-stone-50'>
            <SelectedProjectContext.Provider value={sProjGetSet}>
                <Content activeContentGetSet={activeContentGetSet} mediaState={mediaPathState} styles={activeContent.length ? "w-full h-0 sm:h-full sm:w-1/2 md:w-2/5 hidden sm:block" : "w-full h-full sm:h-full sm:w-2/3 lg:w-1/2"} />
                <ContentDisplay val={true} activeContentGetSet={activeContentGetSet} setSelectedProject={setSelectedProject} mediaState={mediaPathState} styles={activeContent.length ? "w-full h-screen sm:h-full sm:w-1/2 md:w-3/5" : "w-full h-1/3 sm:h-full sm:w-1/3 lg:w-1/2 hidden sm:block"} />



            </SelectedProjectContext.Provider>
        </div>
    );
}

export default Main;