import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarFullTime from '../layout/NavbarFullTime';

function Report() {
  const [phdftstudentId, setPhdftstudentId] = useState('');
  const [phdftstudents, setPhdftstudents] = useState([]);
  const [reports, setReports] = useState([]);
  const [reporterName, setReporterName] = useState('');
  const [issueDescription, setIssueDescription] = useState('');

  useEffect(() => {
    // Fetch the list of Phdftstudents
    axios.get('http://localhost:8080/api/phdftstudents/reports')
      .then(response => setPhdftstudents(response.data))
      .catch(error => console.error('Error fetching Phdftstudents:', error));
  }, []);

  const handlePhdftstudentChange = (event) => {
    setPhdftstudentId(event.target.value);
  };

  const handleSubmitReport = () => {
    // Submit the report
    axios.post(`http://localhost:8080/api/phdftstudents/reports/submit/${phdftstudentId}`, {
      reporterName,
      issueDescription,
    })
      .then(response => {
        alert(response.data);
        // Refresh the reports after submission
        axios.get(`http://localhost:8080/api/phdftstudents/reports/${phdftstudentId}`)
          .then(response => setReports(response.data))
          .catch(error => console.error('Error fetching reports:', error));
      })
      .catch(error => console.error('Error submitting report:', error));
  };

  const handleViewReports = () => {
    // Fetch reports for the selected Phdftstudent
    axios.get(`http://localhost:8080/api/phdftstudents/reports/${phdftstudentId}`)
      .then(response => setReports(response.data))
      .catch(error => console.error('Error fetching reports:', error));
  };

  return (
    <div>
      <NavbarFullTime />
      <div className="container mt-4" style={{ margin: '100px auto', maxWidth: '1200px', padding: '20px', background: '#d4edda' }}>
        <div className="card p-3" style={{ background: '#d4edda' }}>
          <h1 className="mb-4">Phdftstudents and Reports</h1>
          <div className="mb-3">
            <label htmlFor="phdftstudentInput" className="form-label">Enter Phdftstudent ID:</label>
            <input
              type="text"
              id="phdftstudentInput"
              className="form-control"
              value={phdftstudentId}
              onChange={handlePhdftstudentChange}
            />
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <button className="btn btn-primary" onClick={handleViewReports}>
                View Reports
              </button>
            </div>
          </div>
         

          {phdftstudentId && (
            <div className="row mt-4 ">
              <div className="col-md-6">
                <h2>Reports for selected Phdftstudent</h2>
                <ul className="list-group">
                  {reports.map(report => (
                    <li key={report.id} className="list-group-item">
                      <strong>Reporter:</strong> {report.reporterName}, <strong>Description:</strong> {report.issueDescription}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
             
          )}
           </div>

          <div className="row mt-4 p-4">
            <div className="col-md-12 ">
              <label htmlFor="reporterName" className="form-label">Reporter Name:</label>
              <input
                type="text"
                id="reporterName"
                className="form-control"
                value={reporterName}
                onChange={(e) => setReporterName(e.target.value)}
              />

              <label htmlFor="issueDescription" className="form-label mt-2">Issue Description:</label>
              <textarea
                id="issueDescription"
                className="form-control"
                rows="4"
                value={issueDescription}
                onChange={(e) => setIssueDescription(e.target.value)}
              />

              <button className="btn btn-success mt-2" onClick={handleSubmitReport}>
                Submit Report
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Report;
