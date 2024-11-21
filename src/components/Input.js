// src/components/BMICalculator/BMIInput.js
import React from 'react';

function Input({ label, value, onChange }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
