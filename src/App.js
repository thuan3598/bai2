// src/App.js
import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Result from "./components/Result";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);

    if (bmiValue < 18.5) setStatus("Underweight");
    if (bmiValue >= 18.5 && bmiValue < 25) setStatus("Normal");
    if (bmiValue >= 25 && bmiValue < 30) setStatus("Overweight");
    if (bmiValue >= 30) setStatus("Obese");

    setBmi(bmiValue.toFixed(2));
  };

  return (
    <div className="container">
      <div className="App">
        <h1>BMI Calculator</h1>
        <div className="calculator">
          <Input
            label="Enter weight (kg):"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <Input
            label="Enter height (cm):"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <Result bmi={bmi} status={status} />
          <Button onClick={calBMI} />
        </div>
      </div>
    </div>
  );
}

export default App;
