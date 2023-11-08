import React, { useState } from 'react';
import axios from 'axios';

const Assignments = () => {
  const initialQuestions = [
    'What is React?',
    'Explain the virtual DOM in React.',
    'What are React Hooks?',
    'How does state work in React?',
    'What is JSX in React?',
    
  ];

  const [questions, setQuestions] = useState(initialQuestions);
  const [answers, setAnswers] = useState(new Array(initialQuestions.length).fill(''));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    setIsSubmitting(true);
  
    // Prepare data for submission to the Spring Boot API
    const assignmentData = questions.map((question, index) => ({
      question: question,
      answer: answers[index],
    }));
  
    // Send the submission data to the Spring Boot API
    axios.post('http://localhost:8080/api/assignments', assignmentData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        console.log('Assignment submitted successfully:', response.data);
      })
      .catch(error => {
        setIsSubmitting(false);
        setError(error.message || 'An error occurred while submitting the assignment.');
        console.error('Error submitting assignment:', error);
      });
  };
  
  
  

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h2 className="text-center">Assignment Details</h2>
            </div>
            <div className="card-body">
              <ul>
                {questions.map((question, index) => (
                  <li key={index}>
                    <strong>{question}</strong>
                    <div className="mb-3">
                      <label htmlFor={`answer-${index}`}>Write your answer :</label>
                      <textarea
                        id={`answer-${index}`}
                        className="form-control"
                        rows="4"
                        value={answers[index]}
                        onChange={(e) => {
                          const updatedAnswers = [...answers];
                          updatedAnswers[index] = e.target.value;
                          setAnswers(updatedAnswers);
                        }}
                      ></textarea>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? 'Submitting...' : isSubmitted ? 'Assignment Submitted' : 'Submit Assignment'}
              </button>
            </div>
            {error && (
              <div className="card-footer">
                <p className="text-danger text-center">{error}</p>
              </div>
            )}
            {isSubmitted && (
              <div className="card-footer">
                <p className="text-success text-center">Assignment Submitted Successfully!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
