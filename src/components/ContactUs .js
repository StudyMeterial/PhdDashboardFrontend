import React from 'react';
import Navbar from '../layout/Navbar';

const ContactUs = () => {
  return (
  <>
  <Navbar/>
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
  
  
</>
  );
};

export default ContactUs;