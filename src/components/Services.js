import React from 'react';
import Navbar from '../layout/Navbar';

const Services = () => {
  return (
    <div >
      <Navbar/>
      <h2>Our Services</h2>
      <p>
        Welcome to our PhD program dashboard! Here are some of the services we offer to our students:
      </p>
      <ul>
        <li>Research Support and Funding</li>
        <li>Expert Faculty Guidance</li>
        <li>Academic Workshops and Seminars</li>
        <li>Networking Opportunities</li>
        <li>Career Counseling and Placement</li>
        {/* Add more services as needed */}
      </ul>
    </div>
  );
};

export default Services;