import React, { useState } from 'react';
import Addition from './Addition';
import Multiply from './Multiply';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState('');
  const [product, setProduct] = useState('');

  const handleAddition = () => {
    if (num1 !== '' && num2 !== '') {
      const result = Addition(parseInt(num1), parseInt(num2));
      setSum(result);
    }
  };

  const handleMultiplication = () => {
    if (num1 !== '' && num2 !== '') {
      const result = Multiply(parseInt(num1), parseInt(num2));
      setProduct(result);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleAddition}>Add</button>
      <button onClick={handleMultiplication}>Multiply</button>
      <div>
        {sum !== '' && <p>Sum: {sum}</p>}
        {product !== '' && <p>Product: {product}</p>}
      </div>
    </div>
  );
}

export default App;
