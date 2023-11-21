// import React, { useState } from 'react';
// import axios from 'axios';

// const AssignmentList = () => {
//   const [userId, setUserId] = useState('');
//   const [assignments, setAssignments] = useState([]); // Change the initial state to an empty array
//   const [filter, setFilter] = useState('');

//   const handleUserIdChange = (e) => {
//     setUserId(e.target.value);
//   };

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.get(``);
//       setAssignments(response.data);
//     } catch (error) {
//       console.error('Error fetching assignments:', error.response.data);
//     }
//   };

//   const filteredAssignments = assignments.filter(
//     (assignment) =>
//       assignment.assignmentName.toLowerCase().includes(filter.toLowerCase()) ||
//       assignment.assignmentDetails.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className="container mt-5">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="userId" className="form-label">Enter User ID</label>
//           <input
//             type="text"
//             className="form-control"
//             id="userId"
//             value={userId}
//             onChange={handleUserIdChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>

//       {filteredAssignments.length > 0 && ( // Check if filteredAssignments is an array before mapping
//         <>
//           <h3>All Assignments</h3>
//           <div className="mb-3">
//             <label htmlFor="filter" className="form-label">Filter Assignments</label>
//             <input
//               type="text"
//               className="form-control"
//               id="filter"
//               value={filter}
//               onChange={handleFilterChange}
//             />
//           </div>
//           <ul className="list-group">
//             {filteredAssignments.map((assignment) => (
//               <li key={assignment.id} className="list-group-item">
//                 <strong>{assignment.assignmentName}</strong>
//                 <p>{assignment.assignmentDetails}</p>
//                 <p>Status: {assignment.status}</p>
//               </li>
//             ))}
//           </ul>
//         </>
//       )}
//     </div>
//   );
// };

// export default AssignmentList;
// AssignmentList.js
import React, { useState } from 'react';
import { Container, Button, Form, Card } from 'react-bootstrap';
import NavbarAdmin from '../layout/NavbarAdmin';

const AssignmentList = () => {
  const [userId, setUserId] = useState('');
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/assignments/user/all/${userId}`);
      const data = await response.json();
      setAssignments(data);
    } catch (error) {
      setError(`Error fetching assignments: ${error.message}`);
    }
  };

  return (
    <>
    <NavbarAdmin/>
     <Container>
      <Card className="mt-4 " style={{ margin: '100px auto', maxWidth: '600px', padding: '20px', background: '#d4edda' }}>
        <Card.Header as="h3" >Assignment List</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUserId">
              <Form.Label >User ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className='m-2'>
              Submit
            </Button>
          </Form>

          {error && <p className="text-danger">{error}</p>}

          <div className="mt-3">
            <h2>Assignments</h2>
            <ul>
              {assignments.map((assignment, index) => (
                <li key={index}>{assignment}</li>
              ))}
            </ul>
          </div>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
};

export default AssignmentList;
