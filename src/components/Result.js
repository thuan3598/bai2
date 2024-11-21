// src/components/BMICalculator/BMIResult.js
import React from 'react';

function Result({ bmi, status }) {
  return (
    <div className="result">
      <div>Your BMI: <span>{bmi}</span></div>
      <div>Status:<span className={status.toLowerCase()}>{status}</span></div>
    </div>
  );
}

export default Result;
