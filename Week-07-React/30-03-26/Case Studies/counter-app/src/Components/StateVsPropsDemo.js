import React, { useState } from "react";
function DisplayCard({title, value,onChange}) {
const [internalCount, setInternalCount] = useState(0);
return (
    <div style={{ border: "1px solid black",borderRadius: "10px", padding: "20px", margin: "10px" ,width: "200px", textAlign: "center" }}>
        <h3>{title}</h3>
        <p>Props Value from Parents : {value}</p>
        <button onClick={()=> setInternalCount(internalCount+1)}>Update Increment Count</button>
        <button onClick={()=> onChange(value+1)}>Increment Parent Count </button>
    </div>
);
}
function StateVsPropsDemo() {
    const [parentCount, setParentCount] = useState(0);
    const [parentStep, setParentStep] = useState(1);
    const [displaycolor, setDisplayColor] = useState("lightblue");
    const handleParentCountChange = (newCount) => {
        setParentCount(newCount);
        setDisplayColor(newCount % 2 === 0 ? "lightblue" : "lightcoral");
    };
    return(
       <div style={{display: 'flex', justifyContent: 'center', padding: '20px'}}>
      <p>Parent Count: {parentCount}</p>
      <button onClick={() => setParentStep(parentStep + 1)} 
      style={{marginLeft: '20px'}}>
        Increase Step (Current: {parentStep})</button>
      <button onClick={() => setDisplayColor
        (displaycolor === 'lightblue' ? 'lightcoral' : 'lightblue')} 
        style={{marginLeft: '20px'}}>
        Toggle Display Color</button>
      <DisplayCard
        title="Counter Card" 
        value={parentCount} 
        onChange={handleParentCountChange} 
        style={{backgroundColor: displaycolor}}
      />
      <DisplayCard
       title="child component 2 counter card"
       value={parentCount}
       onChange={handleParentCountChange}
       style={{backgroundColor: displaycolor}}
      />
         
    </div>
    );
}export default StateVsPropsDemo;

