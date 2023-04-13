// React
import React, { useState, useEffect } from "react";

// *** Home Component
const Home = () => {
  // Declares additional Lights from which to add to the main pool
  const additionalLights = ["purple", "MistyRose", "DarkSalmon", "MediumPurple", "CornFlowerBlue"];
  
  // UseStates
  const [lights, setLights] = useState(["green", "yellow", "red"]);
  const [currentLightOnIndex, setCurrentLightOnIndex] = useState(0);
  const [isCycling, setIsCycling] = useState(false);

  // Function to change current light
  const updateCurrentLightOn = () => {
    setCurrentLightOnIndex((currentLightOnIndex) => {
      if (currentLightOnIndex === lights.length - 1) {
        return 0;
      } else {
        return currentLightOnIndex + 1;
      }
    });
  };

  // UseEffect for Auto-cycling through lights
  useEffect(() => {
    let intervalId = 0;
    if (isCycling) {
      intervalId = setInterval(updateCurrentLightOn, 500);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isCycling]);

  // JSX Element from lights array
  const renderedLights = lights.map((element, index) => {
    return (
      <div
        key={index}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: element,
          visibility: index === currentLightOnIndex ? "visible" : "hidden",
        }}></div>
    );
  });

  // Final full JSX returned by Home component
  return (

    <div className="container-fluid vh-100 vh-100 vw-100">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div>
          <div className="d-flex justify-content-center">
            <div className="bg-dark">...</div>          
          </div>
          <div className="bg-dark p-3 rounded-3 ">{renderedLights}</div>
        </div>
        <div className="d-flex flex-column">
          <div><br></br></div>
           {/* Change light Button */}
          <button
            className="btn btn-outline-dark mx-3 my-1"
            onClick={() => {
              updateCurrentLightOn();
            }}>
            Switch
          </button>
           {/* Auto-cycle through lights button */}
           <button className="btn btn-outline-dark mx-3 my-1" onClick={() => setIsCycling(!isCycling)}>
            {isCycling ? "Pause" : "Cycle"}
          </button>
           {/* Add lights Button */}
           <button
            className="btn btn-outline-dark mx-3 my-1"
            onClick={() => {
              setLights([
                ...lights,
                additionalLights[Math.floor(Math.random() * additionalLights.length)],
              ]);
              setIsCycling(false);
            }}>
            Add
          </button>
           {/* Remove light Button, doesn't remove any of the main 3 lights */}
           <button
            className="btn btn-outline-dark mx-3 my-1"
            onClick={() => {
              if (lights.length > 3) {
                if (currentLightOnIndex === lights.length - 1) {
                  setCurrentLightOnIndex(currentLightOnIndex - 1);
                }
                setLights(lights.slice(0, -1));
                setIsCycling(false);
              }
            }}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
