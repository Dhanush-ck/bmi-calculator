import React from "react";
import { useState } from "react";

function App() {

  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBMI] = useState();

  function calculate() {
    const val = weight / (height * height);
    setBMI(val.toFixed(1));
  }

  return(
    <div className="container">
      <div className="container-elements">
        <div className="input">
          <input type="text" className="input-bar" placeholder="Enter your weight in kg" onChange={(e)=>{setWeight(e.target.value)}}/>
          <input type="text" className="input-bar" placeholder="Enter your height in cm" onChange={(e)=>{setHeight(e.target.value/100)}}/>
          <button className="submit-button" onClick={calculate}>Submit</button>
        </div>
        <div className="output">
          {bmi}
        </div>
      </div>
    </div>
  )
}

export default App;