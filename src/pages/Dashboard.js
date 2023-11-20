import React from "react";

import dash2 from "./dash2.jpg";
import dash5 from "./dash5.jpg";
import Navbar from "../layout/Navbar";
import AboutUs from "../components/AboutUs";

export default function Dashboard() {
  return (
    <div>
      <Navbar/>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-8" style={{ textAlign:"center", marginLeft:"450px"}}>PhD Dashboard</h1>
          {/* <img src="src\pages\home.jpg" alt="Description of the image" /> */}

        
        </div>
        <img
            class="card-img-top shadow-effect"
            src={dash5}
            alt="Card image cap"
            style={{ height: 200, width: 500 }}
          />
      </div>
     
      <div
        className="card  shadow-effect"
        style={{ bottom: "3rem", top: "3rem" }}
      >
        <div className="card-body bg-warning">
          {/* Content for the card */}
          <marquee behavior="scroll" direction="right">
          "Explore boundless opportunities as we announce open admissions, your gateway to a transformative educational journey."
          </marquee>
        </div>
      </div>
      <div className="row">
        <div className="container col-md-2">
          <div
            className="card shadow-effect "
            style={{ width: "18rem", left: "10rem", top: "6rem" ,marginBottom:"15rem" }}
          >
            <img className="card-img-top" src={dash2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">PHD Fulltime Student</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p>
                <a
                  className="btn btn-primary btn-lg shadow-effect"
                  href="/addStudent"
                  role="button"
                >
                  Admission Here »
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="container col-md-2">
        <div
            className="card shadow-effect "
            style={{ width: "18rem", top: "6rem" ,marginBottom:"15rem" }}
          >
            <img className="card-img-top" src={dash2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">PHD HalfTime Student</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p>
                <a
                  className="btn btn-primary btn-lg shadow-effect"
                  href="/addUser"
                  role="button"
                >
                  Admission Here »
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>


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

<div style={{ margin: '30px auto', maxWidth: '1200px', padding: '20px', background: '#d4edda' }}>
     
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
    <div className="container mt-5 contact-container bg-secondary text-white" style={{margin:'50px'}}>
    <h2>Contact Us</h2>
    <p>
      Have questions or need assistance? Feel free to reach out to us using the form below or through our contact information.
    </p>
    <div className="row">
      <div className="col-md-6">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="col-md-6 mt-4 mt-md-0">
        <h4>Contact Information</h4>
        <p>Email: mirziauddin57@example.com</p>
        <p>Phone: +91 8658652588</p>
        <p>Address: Jatni, Bhubaneswer, India, 755027</p>
      </div>
    </div>
    </div>
     
    </div>
  );
}
