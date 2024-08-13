import React, {useContext} from 'react';

import SelectedProjectContext from '../Scripts/selectedproject-context';

function ProjectTitle({children}) {

    const {selectedProject, setSelectedProject, activeContent, setActiveContent} = useContext(SelectedProjectContext);

    return (
        <div className='Project-Title w-full'>
            <h1  onMouseDown={() => {
                setSelectedProject(null);
                setActiveContent([]);
            }}className='text-4xl font-bold text-white cursor-pointer'>{children}</h1>
        </div>
    );
}

export default ProjectTitle;