import React, { useState, useEffect } from 'react';

const ProgressBar = ({ data }) => {
  const total = 1500000; // Total value for 100%
  const [percentage, setPercentage] = useState(0) // Calculate the percentage
  const [Collected, setCollected] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzbtMRiizbyxzPplw07nq649W5rH5YmQGeCFOjPloaw0GsA5P3dtNYpOF1Zi_GLJNoLjw/exec');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.text();
        setCollected(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  useEffect(() => {
    // Calculate the percentage when data changes
    setPercentage((Collected / total) * 100);
  }, [Collected, total]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection:'column' }}>
      <div
        style={{
          width: '100%',
          backgroundColor: '#ddd',
          borderRadius: '4px',
          padding: '2px',
          marginRight: '5px',
          
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            backgroundColor: '#4CAF50',
            borderRadius: '4px',
            padding: '2px',
            textAlign: 'center',
            color: 'white'
          }}
        >
        </div>
      </div>
      <h1 style={{width:'100%'}}>{percentage.toFixed(2)}%</h1>
    </div>
  );
};

export default ProgressBar;
