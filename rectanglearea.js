// RectangleAreaCalculator.js
import React, { useState } from 'react';

function RectangleAreaCalculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [area, setArea] = useState('');

  const calculateArea = () => {
    const rectangleArea = parseFloat(length) * parseFloat(width);
    setArea(rectangleArea);
  };

  return (
    <div>
      <h2>Rectangle Area Calculator</h2>
      <div>
        <label>
          Length:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Width:
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateArea}>Calculate Area</button>
      {area && <p>Area: {area}</p>}
    </div>
  );
}

export default RectangleAreaCalculator;
