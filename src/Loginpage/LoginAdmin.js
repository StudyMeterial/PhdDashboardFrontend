import React, { useState } from 'react';
import axios from 'axios';

const LoginAdmin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', credentials);
      setMessage(response.data);
      if (response.data === 'Admin login successful'||response.data === credentials.username && response.data===credentials.password) {
        // Redirect to admin home page if login is successful
        window.location.href = '/adminhome';
      } else if (response.data === 'PhdStudent login successful'|| response.data === credentials.username && response.data===credentials.password) {
        // Redirect to student home page if full-time student login is successful
        window.location.href = '/fulltimehome';
      }
      else if (response.data === 'Login successful!' || response.data === credentials.username && response.data===credentials.password) {
        // Redirect to student home page if full-time student login is successful
        window.location.href = '/halftimehome';
      }
    }  catch (error) {
      setMessage('Invalid username or password.');
    }
  };


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default LoginAdmin;
