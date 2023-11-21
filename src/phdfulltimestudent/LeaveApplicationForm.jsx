import React, { useState } from 'react';
import axios from 'axios';
import ApplyLeave from './ApplyLeave';
import NavbarAdmin from '../layout/NavbarAdmin';

const LeaveApplicationForm = (props) => {
    const [application, setApplication] = useState({
        fullName: '',
        email: '',
        startDate: '',
        endDate: '',
        reason: '',
        userId: '' // Added userId field
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setApplication((prevApplication) => ({
            ...prevApplication,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/api/leave-applications/submit/${application.userId}`, application)
            .then(response => console.log(response.data))
            .catch(error => console.error('Error submitting application: ', error));
    };

    return (
        <div className="bg-success">
        <NavbarAdmin/>
        <div className="container mt-5 ">
            <form onSubmit={handleSubmit} style={{margin:'30px',padding:'100px',background: '#d4edda'}}>
            <h2>{props.title1}</h2>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" name="fullName" value={application.fullName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={application.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="startDate" className="form-label">Start Date</label>
                    <input type="date" className="form-control" id="startDate" name="startDate" value={application.startDate} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="endDate" className="form-label">End Date</label>
                    <input type="date" className="form-control" id="endDate" name="endDate" value={application.endDate} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="reason" className="form-label">Reason</label>
                    <textarea className="form-control" id="reason" name="reason" value={application.reason} onChange={handleChange} />
                </div>
                {/* Add other input fields here */}
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">User ID</label>
                    <input type="text" className="form-control" id="userId" name="userId" value={application.userId} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit Application</button>
            </form>
            <ApplyLeave />
        </div>
       
</div>
    );
};

export default LeaveApplicationForm;

LeaveApplicationForm.defaultProps = {
    title1: 'Submit Leave Application',
    title2:'Submit Leave Application',
    title3:'Salary FullTime Student',
    
  
  };
  