import React, { useState } from 'react';
import './SquareStyle.css';

function SquareColor() {
  const [input, setInput] = useState('');
  const [errorDiv, setErrorDiv] = useState('');

  function handleInputChange(event) {
    setInput(event.target.value.toLowerCase());
  }

  function changeColor() {
    const squareColor = document.querySelector(".square");
    if (input == "green") {
      squareColor.style.backgroundColor = "green";
      setErrorDiv("");
    } else if (input == "blue") {
      squareColor.style.backgroundColor = "blue";
      setErrorDiv("");
    } else if (input == "red") {
      squareColor.style.backgroundColor = "red";
      setErrorDiv("");
    } else {
      squareColor.style.backgroundColor = "white";
      setErrorDiv(input + " is not a valid color.  Please choose green, blue or red.");
    }
  }
    return (
      <div>
        <div class="square"></div>
        <input type="text" id="colorInput" onChange={handleInputChange} value={input} />
        <button id="changeButton" onClick={changeColor}>Change color</button>
        <div class="error" id="error">{errorDiv}</div>
      </div>
    );
}

export default SquareColor;