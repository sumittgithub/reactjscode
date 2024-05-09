// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import CountrySelector from './components/CountrySelector';
import Stats from './components/stats';
import fetchData from './utils/fetchData'; // Import fetchData function

function App() {
  const [stats, setStats] = useState({});
  const [country, setCountry] = useState('all');

  useEffect(() => {
    const fetchDataForCountry = async () => {
      const data = await fetchData(country); // Call fetchData function
      setStats(data);
    };
    fetchDataForCountry();
  }, [country]);

  return (
    <div className="App">
      <Header />
      <CountrySelector setCountry={setCountry} />
      <Stats stats={stats} />
    </div>
  );
}

export default App;
