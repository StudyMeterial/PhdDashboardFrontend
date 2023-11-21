import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarFullTime from '../layout/NavbarFullTime';
import FeedbackList from './FeedbackList';

const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState({
    feedbackText: '',
    feedbackType: '',
    rating: 0,
    reviewerName: '',
    reviewerEmail: '',
    isAnonymous: false,
  });

  const [feedbackList, setFeedbackList] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFeedbackData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:8080/api/feedback/add', feedbackData)
      .then((response) => {
        console.log('Feedback added:', response.data);
        setFeedbackData({
          feedbackText: '',
          feedbackType: '',
          rating: 0,
          reviewerName: '',
          reviewerEmail: '',
          isAnonymous: false,
        });
        fetchFeedbacks();
      })
      .catch((error) => console.error('Error:', error));
  };

  const fetchFeedbacks = () => {
    axios
      .get('http://localhost:8080/api/feedback/all')
      .then((response) => setFeedbackList(response.data))
      .catch((error) => console.error('Error:', error));
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div>
      <NavbarFullTime/>
      

      {/* Feedback Form */}
      <form onSubmit={handleSubmit} style={{ margin: '40px auto', maxWidth: '800px' ,maxHeight:'800px', padding: '20px', background: '#d4edda' }}>
      <h1>Feedback App</h1>
        <label htmlFor="feedbackText">Feedback Here:</label>
        <input
          type="text"
          id="feedbackText"
          name="feedbackText"
          className='form-control'
          value={feedbackData.feedbackText}
          onChange={handleChange}
          required
        />

        <label htmlFor="feedbackType">Feedback Type:</label>
        <input
          type="text"
          id="feedbackType"
          name="feedbackType"
          className='form-control'
          value={feedbackData.feedbackType}
          onChange={handleChange}
        />

        <label htmlFor="rating">Rating out of 5:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          className='form-control'
          value={feedbackData.rating}
          onChange={handleChange}
        />

        <label htmlFor="reviewerName">Reviewer Name:</label>
        <input
          type="text"
          id="reviewerName"
          name="reviewerName"
          className='form-control'
          value={feedbackData.reviewerName}
          onChange={handleChange}
        />

        <label htmlFor="reviewerEmail">Reviewer Email:</label>
        <input
          type="email"
          id="reviewerEmail"
          name="reviewerEmail"
          className='form-control'
          value={feedbackData.reviewerEmail}
          onChange={handleChange}
        />

        <label htmlFor="isAnonymous">Anonymous:</label>
        <input
          type="checkbox"
          id="isAnonymous"
          name="isAnonymous"
         className=''
          checked={feedbackData.isAnonymous}
          onChange={handleChange}
        />

        <button type="submit" className='btn btn-warning m-5'>Submit Feedback</button>
      </form>

      {/* Display Feedbacks */}
     {/* Display Feedbacks */}
     <FeedbackList feedbackList={feedbackList} />

    </div>
  );
};

export default Feedback;
