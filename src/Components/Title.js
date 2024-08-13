import React, { useContext, useState } from 'react';

import SelectedProjectContext from './Scripts/selectedproject-context';
import Char from './Char';

function Title({styles}) {

    const {selectedProject, setSelectedProject} = useContext(SelectedProjectContext);

    const [string, setString] = useState("Hi! My name is Zack Hersh. I'm a web developer and digital designer passionate about making creative and unique work using a range of digital mediums.~I leverage code, animation, typography, 3D and thoughtful design to create inventive projects.");

    function generateLetters(){
        return string.split("").map((char,i) => {
            if(char == "~"){
                return (<div key={i} className='pt-3'></div>)
            } else {
                return (<Char key={i} val={char} canChange={selectedProject ? false : true}/>)
            }
        })
    }


    return (
        <div className={`Title-Cont ${styles} ${selectedProject != null ? "opacity-50" : "opacity-100"} transition-opacity`}>
            <h1 className='text-4xl font-black'>{generateLetters()}</h1>
        
        </div>
    );
}

export default Title;