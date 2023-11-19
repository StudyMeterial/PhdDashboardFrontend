// src/SalaryManagement.js

import React, { useState } from 'react';
import axios from 'axios';
import NavbarFullTime from '../layout/NavbarFullTime';

const Salary = () => {
  const [selectedSalary, setSelectedSalary] = useState(null);
  const [selectedSalaryId, setSelectedSalaryId] = useState('');

  const getSalaryDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/salaries/${selectedSalaryId}`);
      setSelectedSalary(response.data);
    } catch (error) {
      console.error('Error fetching salary details:', error);
    }
  };

  return (
    <>
    <NavbarFullTime/>
     <div style={{ backgroundColor: 'lightgreen' ,margin:'200px'}}>
    <div className="mt-4">
       
        <div className="card p-3" style={{ backgroundColor: 'lightgreen' }}>
             <h2>Check Salary Details</h2>
          <div className="form-group">
            <label>Salary ID: </label>
            <input
              type="text"
              className="form-control"
              value={selectedSalaryId}
              onChange={(e) => setSelectedSalaryId(e.target.value)}
            />
          </div>
          <button className="btn btn-success" onClick={getSalaryDetails}>
            Check Details
          </button>
        </div>
      </div>

      {selectedSalary && (
        <div className="mt-4">
          <h3>Selected Salary Details</h3>
          <div className="card p-3" style={{ backgroundColor: 'lightgreen' }}>
            <p>{`Amount: ${selectedSalary.amount}, Month: ${selectedSalary.month}, Year: ${selectedSalary.year}, Employee Name: ${selectedSalary.employeeName}`}</p>
          </div>
        </div>
      )}

      {/* (unchanged code below) */}
      </div>
    </>
  );
};

export default Salary;
