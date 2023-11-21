import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import NavbarAdmin from '../layout/NavbarAdmin';
// import PropTypes from 'prop-types'



const FeedbackList = (props) =>  {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/feedback/all');
        setFeedbackList(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
        setError('Failed to fetch feedbacks. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  if (loading) {
    return <p>Loading feedbacks...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <>
    <NavbarAdmin/>
    <div  style={{ margin: '20px auto', maxWidth: '1500px', padding:'20px' ,background: '#d4edda' }}>
      <h2>{props.title}</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
            <th>Type</th>
            <th>Rating</th>
            <th>Reviewer Name</th>
            <th>Reviewer Email</th>
            <th>Anonymous</th>
            {/* Include additional fields as needed */}
          </tr>
        </thead>
        <tbody>
          {feedbackList.map((feedback) => (
            <tr key={feedback.id}>
              <td>{feedback.id}</td>
              <td>{feedback.feedbackText}</td>
              <td>{feedback.feedbackType}</td>
              <td>{feedback.rating}</td>
              <td>{feedback.reviewerName}</td>
              <td>{feedback.reviewerEmail}</td>
              <td>{feedback.isAnonymous ? 'Yes' : 'No'}</td>
              {/* Include additional fields as needed */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  );
};

FeedbackList.defaultProps = {
  title: 'All FeedBack Data'
};

export default FeedbackList;


