// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ApproveLeaveApplication = () => {
//   const [leaveApplication, setLeaveApplication] = useState({});
//   const [responseMessage, setResponseMessage] = useState('');

//   useEffect(() => {
//     // Fetch leave application data by ID and update the state
//     axios.get('http://localhost:8080/api/leave-applications/2')
//       .then(response => setLeaveApplication(response.data))
//       .catch(error => console.error('Error fetching leave application data: ', error));
//   }, []);

//   const handleApprove = () => {
//     axios.put('http://localhost:8080/api/leave-applications/approve/2', {}, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(response => setResponseMessage(response.data))
//       .catch(error => console.error('Error approving leave application: ', error));
//   };

//   const handleReject = () => {
//     axios.put('http://localhost:8080/api/leave-applications/reject/2', {}, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(response => setResponseMessage(response.data))
//       .catch(error => console.error('Error rejecting leave application: ', error));
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Leave Application Details</h2>
//       <div className="mb-3">
//         <strong>Full Name:</strong> {leaveApplication.fullName}
//       </div>
//       <div className="mb-3">
//         <strong>Email:</strong> {leaveApplication.email}
//       </div>
//       <div className="mb-3">
//         <strong>Start Date:</strong> {leaveApplication.startDate}
//       </div>
//       <div className="mb-3">
//         <strong>End Date:</strong> {leaveApplication.endDate}
//       </div>
//       <div className="mb-3">
//         <strong>Reason:</strong> {leaveApplication.reason}
//       </div>
//       <div className="mb-3">
//         <strong>Status:</strong> {leaveApplication.status}
//       </div>
//       <button className="btn btn-success me-2" onClick={handleApprove}>
//         Approve
//       </button>
//       <button className="btn btn-danger" onClick={handleReject}>
//         Reject
//       </button>
//       {responseMessage && (
//         <div className="mt-3 alert alert-success">
//           {responseMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApproveLeaveApplication;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarAdmin from '../layout/NavbarAdmin';

const ApproveLeaveApplication = () => {
  const [leaveApplications, setLeaveApplications] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    // Fetch leave applications on component mount
    axios.get('http://localhost:8080/api/leave-applications')
      .then(response => setLeaveApplications(response.data))
      .catch(error => console.error('Error fetching leave applications: ', error));
  }, []);

  const handleApprove = (id) => {
    axios.put(`http://localhost:8080/api/leave-applications/approve/${id}`, {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setResponseMessage(response.data);
        // Update the leave applications list after approval
        axios.get('http://localhost:8080/api/leave-applications')
          .then(response => setLeaveApplications(response.data))
          .catch(error => console.error('Error fetching leave applications: ', error));
      })
      .catch(error => console.error('Error approving leave application: ', error));
  };

  const handleReject = (id) => {
    axios.put(`http://localhost:8080/api/leave-applications/reject/${id}`, {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setResponseMessage(response.data);
        // Update the leave applications list after rejection
        axios.get('http://localhost:8080/api/leave-applications')
          .then(response => setLeaveApplications(response.data))
          .catch(error => console.error('Error fetching leave applications: ', error));
      })
      .catch(error => console.error('Error rejecting leave application: ', error));
  };

  return (
    <>
    <NavbarAdmin/>
    <div className="container mt-5">
      <h2>Leave Applications</h2>
      <div className="list-group">
        {leaveApplications.map(application => (
          <div key={application.id} className="list-group-item d-flex justify-content-between align-items-center">
            {`${application.fullName} - ${application.status}`}
            <div>
              <button
                className="btn btn-success me-2"
                onClick={() => handleApprove(application.id)}
              >
                Approve
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleReject(application.id)}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
      {responseMessage && (
        <div className="mt-3 alert alert-success">
          {responseMessage}
        </div>
      )}
    </div>
    </>
  );
};

export default ApproveLeaveApplication;

