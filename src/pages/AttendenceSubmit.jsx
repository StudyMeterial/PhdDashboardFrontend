// SubmitAttendance.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import NavbarAdmin from '../layout/NavbarAdmin';

const AttendanceSubmit = () => {
  const [adminId, setAdminId] = useState('');
  const [userId, setUserId] = useState('');
  const [present, setPresent] = useState(true); // Assuming default is 'present'
  const [date, setDate] = useState(getFormattedDate()); // Set the initial date

  // Function to get the current date in 'YYYY-MM-DD' format
  function getFormattedDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/admin/attendance/submit/${adminId}/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date,
          present,
        }),
      });

      if (!response.ok) {
        // Handle non-OK responses here
        console.error(`HTTP error! Status: ${response.status}`);
        // Optionally throw an error or return, depending on your requirements
        return;
      }

      const data = await response.json();
      console.log(data); // Log or handle the response accordingly
    } catch (error) {
      console.error('Error submitting attendance:', error);
    }
  };

  return (
    <>
    <NavbarAdmin/>
    <div style={{ margin: '40px auto', maxWidth: '600px', padding: '20px', background: '#d4edda' }}>
    <Container>
     
      <Form onSubmit={handleSubmit} style={{ margin: '100px auto'}}>
      <h2>Submit Attendance</h2>
        <Form.Group controlId="formAdminId">
          <Form.Label>Admin ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Admin ID"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formUserId">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPresent">
          <Form.Check
            type="checkbox"
            label="Present"
            checked={present}
            onChange={(e) => setPresent(e.target.checked)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit Attendance
        </Button>
      </Form>
    </Container>
    </div>
    </>
  );
};

export default AttendanceSubmit;
