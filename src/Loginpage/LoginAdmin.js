import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../layout/Navbar';

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
    <>
     <Navbar/>
     <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{ width: '500px',margin:'100px' }}>
            <div className="card-header bg-primary text-white">
              <h2 className="text-center">Login</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username:</label>
                  <input
                    type="text"
                    className="form-control"
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
                    className="form-control"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
              </form>
              <div className="mt-3">
                <p className="text-center">
                  <a href="/forgot-password">Forgot Password?</a>
                </p>
                <div className="card-footer">
              <p className="text-danger text-center">{message}</p>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginAdmin;
