// LeaveApplicationForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarHalfTime from '../layout/NavbarHalfTime';

const LeaveApplicationuser = () => {
  const [userId, setUserId] = useState('');
  const [reason, setReason] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Assume you have a function to fetch user details based on an identifier
  const fetchUserDetails = async () => {
    // Add logic to fetch user details based on userId
    // For simplicity, let's assume it's an HTTP request to the server
    try {
      const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
      // Assuming response.data contains user details
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error.message);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserDetails();
    }
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8080/api/leave-applications/user/submit/${userId}`, {
        reason,
        startDate,
        endDate,
        status: 'Pending',
      });

      console.log(response.data); // Log the server response
    } catch (error) {
      console.error('Error submitting leave application:', error.message);
    }
  };

  return (
    <>
      <NavbarHalfTime />

      <div className="card" style={{ margin: '100px auto', maxWidth: '600px', padding: '20px', background: '#d4edda' }}>
        <h2 className="card-title text-center mb-4">Leave Application Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">User ID:</label>
            <input
              type="text"
              id="userId"
              className="form-control"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="reason" className="form-label">Reason:</label>
            <input
              type="text"
              id="reason"
              className="form-control"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">Start Date:</label>
            <input
              type="date"
              id="startDate"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">End Date:</label>
            <input
              type="date"
              id="endDate"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-success">Submit Leave Application</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LeaveApplicationuser;



// import React, { useState } from 'react';
// import axios from 'axios';

// const LeaveApplicationuser = () => {
//   const [reason, setReason] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8080/api/user-leave-applications/apply/2', {
//         reason,
//         startDate,
//         endDate,
//         status: 'Pending',
//       });

//       console.log(response.data); // Log the server response
//     } catch (error) {
//       console.error('Error submitting leave application:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Leave Application Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="reason">Reason:</label>
//         <input
//           type="text"
//           id="reason"
//           value={reason}
//           onChange={(e) => setReason(e.target.value)}
//           required
//         />

//         <label htmlFor="startDate">Start Date:</label>
//         <input
//           type="date"
//           id="startDate"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           required
//         />

//         <label htmlFor="endDate">End Date:</label>
//         <input
//           type="date"
//           id="endDate"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           required
//         />

//         <button type="submit">Submit Leave Application</button>
//       </form>
//     </div>
//   );
// };

// export default LeaveApplicationuser;

