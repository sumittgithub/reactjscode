
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state in your React component
    }
  };
  
  return (
    <div className="App">
      <h1>Data from MySQL Database</h1>
      <ul>
        {data.map((item) => (
          <li key={item.itemid}>{item.itemname}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
