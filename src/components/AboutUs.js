import React from 'react';
import Navbar from '../layout/Navbar';

const AboutUs = () => {
  return (<>
  <Navbar/>
  
  <div class="container " style={{ margin: '100px auto', maxWidth: '1200px', padding: '20px', background: '#d4edda' }}>
        <div>
    <h1>About Us</h1>
    <p className="bg-warning p-5 m-2" >
    <h2>About PhD Dashboard</h2>
        Welcome to the PhD Dashboard, your centralized platform for managing PhD programs.
        Here, we cater to two types of PhD students: Full-Time and Half-Time.
    </p>

   
    <p className="bg-warning p-5  m-2">
    <h3>Full-Time PhD Students</h3>
        Full-time PhD students dedicate their entire time to their studies and research.
        They typically have a heavier workload and are actively engaged in academic activities.
        Our platform provides comprehensive support and resources to help them succeed.
    </p>

   
    <p className="bg-warning p-5  m-2">
    <h3>Half-Time PhD Students</h3>
        Half-time PhD students balance their studies with other commitments, such as work or family.
        They follow a part-time schedule, allowing for a more flexible academic journey.
        Our platform is designed to accommodate their unique needs, offering tailored assistance and guidance.
    </p>
</div>
</div>
    </>
  );
};

export default AboutUs;