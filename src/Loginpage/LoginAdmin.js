// import React, { useState } from 'react';
// import axios from 'axios';
// import Navbar from '../layout/Navbar';

// const LoginAdmin = () => {
//   const [credentials, setCredentials] = useState({ username: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleInputChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/login', credentials);
//       setMessage(response.data);
//       if (response.data ===credentials.username) {
//         // Redirect to admin home page if login is successful
//         window.location.href = '/adminhome';
//       } else if (response.data === 'PhdStudent login successful'|| response.data === credentials.username && response.data===credentials.password) {
//         // Redirect to student home page if full-time student login is successful
//         window.location.href = '/fulltimehome';
//       }
//       else if (response.data === 'Login successful!' || response.data === credentials.username && response.data===credentials.password) {
//         // Redirect to student home page if full-time student login is successful
//         window.location.href = '/halftimehome';
//       }
//     }  catch (error) {
//       setMessage('Invalid username or password.');
//     }
//   };

//   return (
//     <>
//      <Navbar/>
//      <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card" style={{ width: '500px',margin:'100px' }}>
//             <div className="card-header bg-primary text-white">
//               <h2 className="text-center">Login</h2>
//             </div>
//             <div className="card-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label>Username:</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="username"
//                     value={credentials.username}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Password:</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     name="password"
//                     value={credentials.password}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary btn-block">Login</button>
//               </form>
//               <div className="mt-3">
//                 <p className="text-center">
//                   <a href="/forgot-password">Forgot Password?</a>
//                 </p>
//                 <div className="card-footer">
//               <p className="text-danger text-center">{message}</p>
//             </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default LoginAdmin;

// import React, { useState } from 'react';

// const LoginAdmin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [userData, setUserData] = useState(null);

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           password,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setUserData(data); // Set user data after successful login
//         setError('');
//       } else {
//         setError('Invalid username or password.');
//         setUserData(null); // Clear user data on login failure
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setError('An error occurred during login.');
//       setUserData(null); // Clear user data on error
//     }
//   };

//   return (
//     <div>
//       {userData ? (
//         <div>
//           <h2>Welcome, {userData.fullname}!</h2>
//           <h2>Welcome, {userData.username}!</h2>
//           <h2>Welcome, {userData.password}!</h2>
//           {/* Display other user-specific data here */}
//         </div>
//       ) : (
//         <div>
//           <h2>Login</h2>
//           <div>
//             <label>Username:</label>
//             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </div>
//           {error && <div style={{ color: 'red' }}>{error}</div>}
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginAdmin;

// // Import necessary dependencies
// import React, { useState } from 'react';
// // import { useHistory } from 'react-router-dom';

// // Assume you have separate components for AdminHome, UserHome, and PhdStudentHome

// const LoginAdmin = () => {
//   // const history = useHistory();
//   const [loginData, setLoginData] = useState({
//     username: '',
//     password: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({ ...loginData, [name]: value });
//   };

//   const handleLogin = async () => {
//     // Make a request to the backend for authentication using loginData
//     try {
//       const response = await fetch('http://localhost:8080/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginData),
//       });

//       if (response.ok) {
//         const userData = await response.json();

//         // Redirect based on user role
//         if (userData.hasOwnProperty('username') && userData.hasOwnProperty('password')) {

//           window.location.href = '/halftimehome';

//         }else if (userData.hasOwnProperty('username')) {

//           window.location.href = '/fulltimehome';
//         } else if (userData.hasOwnProperty('password')) {

//           window.location.href = '/adminhome';
//         }
//       } else {
//         // Handle unsuccessful login
//         console.error('Invalid username or password');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={loginData.username}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={loginData.password}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <button type="button" onClick={handleLogin}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginAdmin;

import React, { useState } from "react";
// import NavbarAdmin from '../layout/NavbarAdmin';
import Navbar from "../layout/Navbar";
import { Link } from "react-router-dom";

const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data); // Set user data after successful login
        setError("");
      } else {
        setError("Invalid username or password.");
        setUserData(null); // Clear user data on login failure
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login.");
      setUserData(null); // Clear user data on error
    }
  };

  return (
    <div>
      <Navbar />
      {userData ? (
        <div>
          {/* Render user-specific content based on the response */}
          {userData.fullname && userData.phdStudent ? (
            <div style={{margin:'200px'}}>
              {/* <h5>Welcome, PhdStudent {userData.fullname}!</h5>
              <h5>Welcome, PhdStudent {userData.username}!</h5>
              <h5>Welcome, PhdStudent {userData.password}!</h5>
              <h5>Welcome, PhdStudent {userData.phdStudent}!</h5>
              {/* Add PhdStudent-specific content here */}
              {/* <p>This is specific content for PhdStudents. You can customize this section.</p>
              <form class="form-inline my-2 my-lg-0" style={{marginRight:"0.5rem"}}>
            <Link className="btn btn-success" to={`/fulltimehome`}>
              Login
            </Link></form> */}
              <div className="container">
               
                  <div className="col-md offset-md border rounded mt-2 shadow">
                    <h2 className="text-center m-12">Phd Dashboard FullTimeProfile</h2>

                    <div className="card">
                      <div className="card-header">
                        Details of User Id : {userData.id}
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <b>Name:</b>
                            {userData.fullname}
                          </li>
                          <li className="list-group-item">
                            <b>userName:</b>
                            {userData.username}
                          </li>
                          <li className="list-group-item">
                            <b>Email:</b>
                            {userData.email}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/fulltimehome"}>
                      Go to Dashboard
                    </Link>
                  </div>
                </div>
              </div>
          
          ) : userData.username && userData.fullname ? (
            <div style={{margin:'200px'}}>
             <div className="container">
             
                  <div className="col-md offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-12">HalfTime Profile</h2>

                    <div className="card">
                      <div className="card-header">
                        Details of User Id : {userData.id}
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <b>Name:</b>
                            {userData.fullname}
                          </li>
                          <li className="list-group-item">
                            <b>userName:</b>
                            {userData.username}
                          </li>
                          <li className="list-group-item">
                            <b>Email:</b>
                            {userData.email}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/halftimehome"}>
                      Go to Dashboard
                    </Link>
                  </div>
             
              </div>
              {/* Add Admin-specific content here */}
            </div>
          ) : (
            <div>
              <div style={{margin:'200px'}}>
              <div className="container">
                  <div className="col-md offset-md border rounded  mt-2 shadow">
                    <h2 className="text-center ">User Profile</h2>

                    <div className="card">
                      <div className="card-header">
                        Details of User Id : {userData.id}
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <b>Username:</b>
                            {userData.username}
                          </li>
                          <li className="list-group-item">
                            <b>password:</b>
                            {userData.password}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/adminhome"}>
                      Go to Dashboard
                    </Link>
                  </div>
                </div>
                </div>
              {/* Add User-specific content here */}
            </div>
          )}
        </div>
      ) : (
        <div style={{border: '2px solid #000', marginLeft:'400px',marginRight:'400px',marginTop:"50px",marginBottom:'100px', padding:'60px'}}>
          
          <header style={{fontSize:'50px',padding:'20px'}}>Login Here</header>
          <div style={{fontSize:'20px',padding:'10px'}}>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{fontSize:'20px',padding:'10px'}}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginAdmin;
