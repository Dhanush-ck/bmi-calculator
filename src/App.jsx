import React from "react";
import { useState } from "react";

function App() {

  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBMI] = useState();
  const [category, setCategory] = useState("Enter the details");

  function calculate() {
    const val = weight / (height * height);
    if(val){
      setBMI(val.toFixed(1));
      if(val < 18.5){
        setCategory("Underweight");
      }
      else if(val < 24.9) {
        setCategory("Normal weight");
      }
      else if(val < 29.9) {
        setCategory("Overweight");
      }
      else if(val < 34.9) {
        setCategory("Obesity I");
      }
      else if(val < 39.9) {
        setCategory("Obesity II");
      }
      else {
        setCategory("Severe Obesity (Obesity III)");
      }
    }
    else {
      setCategory("Enter the details")
      setBMI();
    }
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
          <button className="submit-button" onClick={calculate}>
            <div>Submit</div>
          </button>
        </div>
        <div className="output">
          <div className="bmi">
            {bmi}
          </div>
          <div className="category">
            {category}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;