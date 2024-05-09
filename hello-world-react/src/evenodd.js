import React, { useState } from 'react';

function OddEvenNumberFinder() {
  const [numbers, setNumbers] = useState([]);
  const [oddNumbers, setOddNumbers] = useState([]);
  const [evenNumbers, setEvenNumbers] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    // Convert input string to an array of numbers
    const nums = inputValue.split(',').map(num => parseInt(num.trim(), 10));
    setNumbers(nums);
  };

  const findOddEvenNumbers = () => {
    const odd = [];
    const even = [];
    // Iterate over the numbers array and classify each number as odd or even
    numbers.forEach(num => {
      if (num % 2 === 0) {
        even.push(num);
      } else {
        odd.push(num);
      }
    });
    setOddNumbers(odd);
    setEvenNumbers(even);
  };

  return (
    <div>
      <h2>Find Odd and Even Numbers</h2>
      <div>
        <label>
          Enter numbers separated by comma:
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="e.g., 1, 2, 3, 4"
          />
        </label>
      </div>
      <button onClick={findOddEvenNumbers}>Find Odd and Even Numbers</button>
      <div>
        {oddNumbers.length > 0 && (
          <p>Odd Numbers: {oddNumbers.join(', ')}</p>
        )}
        {evenNumbers.length > 0 && (
          <p>Even Numbers: {evenNumbers.join(', ')}</p>
        )}
      </div>
    </div>
  );
}

export default OddEvenNumberFinder;
