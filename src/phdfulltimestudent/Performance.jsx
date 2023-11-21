import React, { useState } from 'react';
import { ProgressBar, Form, Button, Container, Row, Col } from 'react-bootstrap';
import NavbarFullTime from '../layout/NavbarFullTime';

const Performance = () => {
  const [workDone, setWorkDone] = useState(0); // Initial work done percentage
  const [studentName, setStudentName] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [program, setProgram] = useState('');

  const handleWorkChange = (e) => {
    const newWorkDone = parseInt(e.target.value, 10);
    setWorkDone(newWorkDone);
  };

  const handleStudentNameChange = (e) => {
    setStudentName(e.target.value);
  };

  const handleSupervisorChange = (e) => {
    setSupervisor(e.target.value);
  };

  const handleProgramChange = (e) => {
    setProgram(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to submit the data to the server or perform other actions
  };

  return (
    <>
      <NavbarFullTime />
      <Container style={{ margin: '100px auto', maxWidth: '800px', padding: '20px', background: '#d4edda' }}>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="studentName">
          <h2 className="mb-4">PhD Student Performance Tracker</h2>
            <Form.Label>Student Name:</Form.Label>
            <Form.Control type="text" value={studentName} onChange={handleStudentNameChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="supervisor">
            <Form.Label>Supervisor:</Form.Label>
            <Form.Control type="text" value={supervisor} onChange={handleSupervisorChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="program">
            <Form.Label>Program:</Form.Label>
            <Form.Control type="text" value={program} onChange={handleProgramChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="workInput">
            <Form.Label>Enter Work Done Percentage:</Form.Label>
            <Form.Control type="number" value={workDone} onChange={handleWorkChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

       

        <Row className="m-5 ">
          <Col>
            <strong>Student Name:</strong> {studentName}
          </Col>
          <Col>
            <strong>Supervisor:</strong> {supervisor}
          </Col>
          <Col>
            <strong>Program:</strong> {program}
          </Col>
          <Col>
          <strong>Progress:</strong> 
          <ProgressBar className="mt-4" now={workDone} label={`${workDone}%`} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Performance;
