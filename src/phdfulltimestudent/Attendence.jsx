// ViewAttendance.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import NavbarHalfTime from '../layout/NavbarHalfTime';

const Attendance = () => {
  const [userId, setUserId] = useState('');
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/admin/attendance/view/${userId}`);
      const data = await response.json();
      setAttendanceRecords(data);
    } catch (error) {
      console.error('Error fetching attendance records:', error);
    }
  };

  return ( 
    <>
    <NavbarHalfTime/>
    <Container style={{ margin: '50px auto', maxWidth: '800px', padding: '50px', background: '#d4edda' }}>
     
      <Form onSubmit={handleSubmit} style={{border: '2px solid #3498db', padding: '50px'}}>
      <h2>View Attendance</h2>
        <Form.Group controlId="formUserId">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" className="m-4" type="submit">
          View Attendance
        </Button>
      </Form>

      <div className="mt-3 p-4">
        <h3>Attendance Records</h3>
        <ul>
          {attendanceRecords.map((record, index) => (
            <li key={index}>{record.date} - {record.present ? 'Present' : 'Absent'}</li>
          ))}
        </ul>
      </div>
    </Container>
    </>
  );
};

export default Attendance;
