import React, { useState } from 'react';
import axios from 'axios';
// import './ApplyLeave.css';

const ApplyLeave = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    startDate: '',
    endDate: '',
    reason: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/leave-applications/apply', formData)
      .then(response => {
        console.log('Leave application submitted successfully');
        // Handle success, such as displaying a success message to the user
      })
      .catch(error => {
        console.error('Error submitting leave application:', error);
        // Handle errors, such as displaying an error message to the user
      });
  };

  return (
    <div className="container mt-5 form-container">
    <div className="card">
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Leave Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name *</label>
          <input type="text" className="form-control" id="fullName" name="fullName" required onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email *</label>
          <input type="email" className="form-control" id="email" name="email" required onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">Start Date *</label>
          <input type="date" className="form-control" id="startDate" name="startDate" required onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">End Date *</label>
          <input type="date" className="form-control" id="endDate" name="endDate" required onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="reason" className="form-label">Reason for Leave *</label>
          <textarea className="form-control" id="reason" name="reason" required onChange={handleInputChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default ApplyLeave;
