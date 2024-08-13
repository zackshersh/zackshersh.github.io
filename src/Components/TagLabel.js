import React from 'react';

function TagLabel({name, customColor, solid, large, link}) {


    const getNameSpecificColor = () => {
        
        switch(name){
            case "Web":
                return "blue";
            case "3D":
                return "red";
            case "Motion Graphics":
                return "orange";
            case "AI":
                return "#BB00FF";
            case "Experimental":
                return "#e024c1"
            case "Collaborative":
                return "#02c47a"
            case "UI":
                return "#2ca5f5";
            case "Data Visualization":
                return "#68006e";
            case "Client":
                return "#179c3d";
            case "Branding":
                return "#ff3721";
            case "Graphic Design":
                return "#184af0";
            case "Video":
                return "#6eba04";
            case "Multimedia":
                return "#d000ff";
            case "Full Stack":
                return "#ff841f"
            default:
                return "color3";
        }
    }
    const color = customColor ? customColor : getNameSpecificColor();
    // const color = "black";

    const span = () => {
        return (<span className={`${large ? "text-md" : "text-xs"}`} style={{color: solid ? "white" : color}}> {name} </span>)
    }

    return (
        <div style={{borderColor: color, backgroundColor: solid ? color : "white"}} className={`Tag rounded-full border ${large ? "px-4 py-1" : "px-2"} mr-1 mb-1 cursor-pointer`}>
            { link ? 
                <a href={link}>
                    {span()}
                </a> : span()}
            {/* <span className={`${large ? "text-md" : "text-xs"}`} style={{color: solid ? "white" : color}}>
                {name}
            </span> */}
            {/* <span className="text-red-500">{name}</span> */}
        </div>
    );
}

export default TagLabel;