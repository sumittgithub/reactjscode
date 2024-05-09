// CountrySelector.js
import React from 'react';

function CountrySelector({ setCountry }) {
  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <label htmlFor="country">Select Country:</label>
      <select id="country" onChange={handleChange}>
        <option value="all">Worldwide</option>
        <option value="India">India</option>
        
        {/* Add options for other countries */}
      </select>
    </div>
  );
}

export default CountrySelector;
