import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import NavbarFullTime from '../layout/NavbarFullTime';

const Performance = () => {
  const [workDone, setWorkDone] = useState(0); // Initial work done percentage

  const handleWorkChange = (e) => {
    const newWorkDone = parseInt(e.target.value, 10);
    setWorkDone(newWorkDone);
  };

  return (
    <>
    <NavbarFullTime/>
    <div className="container mt-12 card" style={{marginTop:'200px',marginBottom:'100px'}}>
      
      <div className="mb-12">
      <h2>PhD Student Performance Tracker</h2>
        <label htmlFor="workInput" className="form-label">Enter Work Done Percentage:</label>
        <input
          type="number"
          className="form-control"
          id="workInput"
          value={workDone}
          onChange={handleWorkChange}
        />
      </div>
      <ProgressBar now={workDone} label={`${workDone}%`} />
    </div>
    </>
  );
};

export default Performance;
