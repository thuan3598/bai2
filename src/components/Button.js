import React from 'react';

function Button({ onClick }) {
  return (
    <button className="calculate-btn" onClick={onClick}>
      Calculate
    </button>
  );
}

export default Button;
