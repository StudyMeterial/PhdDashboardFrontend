import React, { useState } from 'react';
import axios from 'axios';
import './Profiledemo.css';


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
    <div className="user-detail-container">
      <h2>Fetch User Details by ID</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID:</label>
          <input
            type="text"
            value={userId}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Fetch User Details</button>
      </form>
      <div className='user-data'>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {userData && (
        <div>
          <h3>User Data</h3>
          <p>ID: {userData.id}</p>
          <p>FullName: {userData.fullname}</p>
          <p>Email: {userData.email}</p>
          <p>FullName: {userData.username}</p>
          <p>Email: {userData.password}</p>
          
          {/* Display other user data fields here */}
        </div>
      )}
      </div>
    </div>
  );
};

export default LoginAdmin;
