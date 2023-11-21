import React, { useState } from 'react';
import axios from 'axios';
import NavbarFullTime from '../layout/NavbarFullTime';
// import { Card } from 'react-bootstrap';
// import './Profiledemo.css';


const LoginAdmin = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a GET request to fetch user data by ID
      const response = await axios.get(`http://localhost:8080/phdstudentft/${userId}`);
      const user = response.data;

      // Set user data to the state
      setUserData(user);
      setErrorMessage('');
    } catch (error) {
      // Handle error if user is not found
      setUserData(null);
      setErrorMessage('User not found. Please enter a valid ID.');
    }
  };

  return (
    <>
      <NavbarFullTime />
      <div className="card border-2" style={{ margin: '100px auto', maxWidth: '600px', padding: '20px', background: '#d4edda' }}>
              <div className="card-body">
      <div className="user-detail-container">
        <h2>Enter Your ID</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ID:</label>
            <input
              type="text"
              className="form-control m-4"
              value={userId}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Enter Your ID</button>
        </form>
        <div className="user-data">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {userData && (
           <div className='bg-success border-2 m-4 p-3'>
                <h3 className="card-title">Your Profile</h3>
                <p className="card-text">ID: {userData.id}</p>
                <p className="card-text">FullName: {userData.fullname}</p>
                <p className="card-text">Email: {userData.email}</p>
                <p className="card-text">Username: {userData.username}</p>
                <p className="card-text">Password: {userData.password}</p>
                {/* Display other user data fields here */}
            </div>
          )}
        </div>
      </div>
      </div>
 </div>
    </>
  );
};

export default LoginAdmin;
