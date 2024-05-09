// Stats.js
import React from 'react';

function Stats({ stats }) {
  return (
    <div>
      <h2>Stats</h2>
      <ul>
        <li>Total Cases: {stats.cases}</li>
        <li>Total Deaths: {stats.deaths}</li>
        <li>Total Recovered: {stats.recovered}</li>
        {/* Add more stats */}
      </ul>
    </div>
  );
}

export default Stats;
