import React, { useState } from 'react';
const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    border:"3px solid green"
}

const PointCounter = () => {
    const [points, setPoints] = useState(0);

  
  

  const addPoint = () => {
    setPoints(points + 1);
  }

  
  
    return (
    <div style={containerStyle}>
      <p>Points: {points}</p>
      <PointCounter />
      
      <button onClick={addPoint}>Add One Point</button>
      
    </div>
    )
}

export default PointCounter;