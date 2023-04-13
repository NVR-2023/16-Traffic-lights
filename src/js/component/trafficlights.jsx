import React from "react";
import { useState } from "react"
; 
const TrafficLights = () => {
    let lights = ["green", "yellow", "red"];
    let RenderedLights = lights.map((element, index) => { 
        return (
            <div key = {index} >{element}</div>
        );
    })    
    
    const [ currentLightOnIndex , setCurrentLightOnIndex] = useState(0);
        return (
        <div>
            {RenderedLights}
        </div>
    );
}


export default TrafficLights;