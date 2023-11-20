

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarAdmin from '../layout/NavbarAdmin';
// ... (imports)

const ApproveUserLeaveApplication = () => {
  const [leaveApplications, setLeaveApplications] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch leave applications on component mount
    axios.get('http://localhost:8080/api/leave-applications/user')
      .then(response => {
        setLeaveApplications(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching leave applications: ', error);
        setLoading(false);
      });
  }, []);

  const handleApprove = (id) => {
    setLoading(true);
    axios.put(`http://localhost:8080/api/leave-applications/user/approve/${id}`, {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setResponseMessage(response.data);
        // Update the leave applications list after approval
        return axios.get('http://localhost:8080/api/leave-applications/user');
      })
      .then(response => {
        setLeaveApplications(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error approving leave application: ', error);
        setLoading(false);
      });
  };

  const handleReject = (id) => {
    setLoading(true);
    axios.put(`http://localhost:8080/api/leave-applications/user/reject/${id}`, {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setResponseMessage(response.data);
        // Update the leave applications list after rejection
        return axios.get('http://localhost:8080/api/leave-applications/user');
      })
      .then(response => {
        setLeaveApplications(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error rejecting leave application: ', error);
        setLoading(false);
      });
  };

  return (
    <>
      <NavbarAdmin />
      <div className="container mt-5">
        {loading && <p>Loading...</p>}
        {!loading && (
          <div className="list-group">
            <h2>Leave Applications</h2>
            {leaveApplications.map(application => (
              <div key={application.id} className="list-group-item d-flex justify-content-between align-items-center">
                {`${application.id} - ${application.status}`}
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
        )}
        {responseMessage && (
          <div className="mt-3 alert alert-success">
            {responseMessage}
          </div>
        )}
      </div>
    </>
  );
};

export default ApproveUserLeaveApplication;
