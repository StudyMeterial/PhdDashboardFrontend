// AssignmentList.js
import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import NavbarAdmin from '../layout/NavbarAdmin';

const AssignmentListFull = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/assignments');
      const data = await response.json();
      setAssignments(data);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  return (
    <>
    <NavbarAdmin/>
    <div style={{ margin: '50px auto', maxWidth: '1200px', padding: '20px', background: '#d4edda' }}>
    <h2>All Assignments</h2>
    <Container>
    
      <Table striped bordered hover>
     
        <thead>
          <tr>
            <th>ID</th>
            <th>question</th>
            <th>Answer</th>
            {/* Add more columns as per your Assignment model */}
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.id}>
              <td>{assignment.id}</td>
              <td>{assignment.question}</td>
              <td>{assignment.answer}</td>
              {/* Add more columns as per your Assignment model */}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    </div>
    </>
  );
};

export default AssignmentListFull;
