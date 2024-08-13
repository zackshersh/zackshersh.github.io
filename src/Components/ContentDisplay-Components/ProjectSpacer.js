import React from 'react';

function ProjectSpacer({size}) {

    const getPadding = () => {
        switch(size){
            case "small":
                return "p-3";
            case "large":
                return "p-7";
            default:
                return "p-5"
        }
    }

    return (
        <div className={`${getPadding()}`}>
            
        </div>
    );
}

export default ProjectSpacer;