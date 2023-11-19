// src/SalaryManagement.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarAdmin from '../layout/NavbarAdmin';

const SalaryManagment = () => {
  const [salaries, setSalaries] = useState([]);
  const [newSalary, setNewSalary] = useState({
    amount: 0,
    month: 0,
    year: 0,
    employeeName: '',
  });
  const [selectedSalary, setSelectedSalary] = useState(null);
  const [selectedSalaryId, setSelectedSalaryId] = useState('');

  useEffect(() => {
    fetchSalaries();
  }, []);

  const fetchSalaries = async () => {
    try {
      const response = await axios.get('http://localhost:8080/salaries');
      setSalaries(response.data);
    } catch (error) {
      console.error('Error fetching salaries:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewSalary({
      ...newSalary,
      [e.target.name]: e.target.value,
    });
  };

  const addSalary = async () => {
    try {
      const { amount, month, year, employeeName } = newSalary;
      await axios.post('http://localhost:8080/salaries', { amount, month, year, employeeName });
      fetchSalaries();
      setNewSalary({
        amount: 0,
        month: 0,
        year: 0,
        employeeName: '',
      });
    } catch (error) {
      console.error('Error adding salary:', error);
    }
  };

  const getSalaryDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/salaries/${selectedSalaryId}`);
      setSelectedSalary(response.data);
    } catch (error) {
      console.error('Error fetching salary details:', error);
    }
  };

  const updateSalary = async () => {
    try {
      const { amount, month, year, employeeName } = selectedSalary;
      await axios.put(`http://localhost:8080/salaries/${selectedSalaryId}`, {
        amount,
        month,
        year,
        employeeName,
      });
      fetchSalaries();
      setSelectedSalary(null);
      setSelectedSalaryId('');
    } catch (error) {
      console.error('Error updating salary:', error);
    }
  };

  const deleteSalary = async () => {
    try {
      await axios.delete(`http://localhost:8080/salaries/${selectedSalaryId}`);
      fetchSalaries();
      setSelectedSalary(null);
      setSelectedSalaryId('');
    } catch (error) {
      console.error('Error deleting salary:', error);
    }
  };

  return (
    <>
      <NavbarAdmin/>
      <div style={{margin:'100px'}}>
      <div className="container mt-4 " style={{margin:'10px'}}>
    

      <div className="card p-3">
      <h2 className="mb-4">Salary PhD Student</h2>
        <div className="form-group">
          <label>Amount: </label>
          <input
            type="number"
            className="form-control"
            name="amount"
            value={newSalary.amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Month: </label>
          <input
            type="number"
            className="form-control"
            name="month"
            value={newSalary.month}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Year: </label>
          <input
            type="number"
            className="form-control"
            name="year"
            value={newSalary.year}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Employee Name: </label>
          <input
            type="text"
            className="form-control"
            name="employeeName"
            value={newSalary.employeeName}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary" onClick={addSalary}>
          Add Salary
        </button>
      </div>
      </div>
      <div className="container mt-12 ">
      <div className="mt-12">
        <h3>All Salaries</h3>
        <ul className="list-group">
          {salaries.map((salary) => (
            <li key={salary.id} className="list-group-item d-flex justify-content-between align-items-center">
              {`Amount: ${salary.amount}, Month: ${salary.month}, Year: ${salary.year}, Employee Name: ${salary.employeeName}`}
              <button className="btn btn-secondary" onClick={() => setSelectedSalaryId(salary.id)}>
                View Details
              </button>
            </li>
          ))}
        </ul>
      </div>
      </div>
      {selectedSalary && (
        <div className="mt-4">
          <h3>Selected Salary Details</h3>
          <div className="card p-3">
            <p>{`Amount: ${selectedSalary.amount}, Month: ${selectedSalary.month}, Year: ${selectedSalary.year}, Employee Name: ${selectedSalary.employeeName}`}</p>
            <label>Update Employee Name: </label>
            <input
              type="text"
              className="form-control"
              value={selectedSalary.employeeName}
              onChange={(e) =>
                setSelectedSalary({
                  ...selectedSalary,
                  employeeName: e.target.value,
                })
              }
            />
            <button className="btn btn-success mt-2" onClick={updateSalary}>
              Update
            </button>
            <button className="btn btn-danger mt-2 ml-2" onClick={deleteSalary}>
              Delete
            </button>
          </div>
        </div>
      )}

      <div className="mt-4">
        <h3>Check Salary Details</h3>
        <div className="form-group">
          <label>Salary ID: </label>
          <input
            type="text"
            className="form-control"
            value={selectedSalaryId}
            onChange={(e) => setSelectedSalaryId(e.target.value)}
          />
        </div>
        <button className="btn btn-info" onClick={getSalaryDetails}>
          Check Details
        </button>
    
      </div>
    </div>
    </>
  );
};

export default SalaryManagment;
