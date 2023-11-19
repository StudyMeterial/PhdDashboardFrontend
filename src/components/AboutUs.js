import React from 'react';
import Navbar from '../layout/Navbar';

const AboutUs = () => {
  return (<>
  <Navbar/>
   <div className="containe ">
      <h2>About PhD Dashboard</h2>
      <p>
        Welcome to the PhD Dashboard, your centralized platform for managing PhD programs.
        Here, we cater to two types of PhD students: Full-Time and Half-Time.
      </p>

      <h3>Full-Time PhD Students</h3>
      <p>
        Full-time PhD students dedicate their entire time to their studies and research to improve their experience.
        They typically have a heavier workload and are actively engaged in academic activities.
        Our platform provides comprehensive support and resources to help them succeed in their goals.
      </p>

      <h3>Half-Time PhD Students</h3>
      <p>
        Half-time PhD students balance their studies with other commitments, such as work or family.
        They follow a part-time schedule, allowing for a more flexible academic journey.
        Our platform is designed to accommodate their unique needs, offering tailored assistance and guidance.
      </p>
    </div>
    </>
  );
};

export default AboutUs;