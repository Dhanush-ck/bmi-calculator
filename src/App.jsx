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
        <header>BMI Calculator</header>
        <div className="input">
          <div className="weight">
            <input type="text" className="input-bar" placeholder="Enter your weight in kg" onChange={(e)=>{setWeight(e.target.value)}}/>
          </div>
          <div className="height">
            <input type="text" className="input-bar" placeholder="Enter your height in cm" onChange={(e)=>{setHeight(e.target.value/100)}}/>
          </div>
        </div>
        <button className="submit-button" onClick={calculate}>Submit</button>
        <div className="output">
          {bmi}
        </div>
      </div>
    </div>
  )
}

export default App;