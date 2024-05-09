// Addition.js
import React, { useState } from 'react';

function Addition() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const addNumbers = () => {
    const result = parseFloat(num1) + parseFloat(num2);
    setResult(result);
  };

  return (
    <div>
      <h2>Addition of Two Numbers</h2>
      <div>
        <label>
          Number 1:
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </label>
      </div>
      <button onClick={addNumbers}>Add</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default Addition;
