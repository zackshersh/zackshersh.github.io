import React, { useState } from 'react';

import colors from "./Scripts/colors.json"

function Char({val, canChange}) {

    const [index, setIndex] = useState(0);

    // const colors = ["black","red","green","blue"];
    let color = index == 0 ? "black" : colors[index%colors.length]
    return (<span style={{color: color}}
        onMouseEnter={() => {
            if(canChange) setIndex(index+1);
    }}>{val}</span>);
}

export default Char;