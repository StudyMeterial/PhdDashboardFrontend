import React from "react";
import { Link } from "react-router-dom";
// import AddUser from '../users/AddUser'
// import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="">
             
     <footer id="footer" className="smartlib-footer-area bg-dark text-white shadow">
      <div className="container-fluid">
        <div className="row">
          {/* Column 1 */}
          <div className="col-xs-6 col-md-2 col-sm-3 col-xs-12">
            <h2>General </h2>
            <ul className="ftrbtmlink">
              <li><a href="https://cutm.ac.in/wp-content/uploads/General/HOLIDAY LIST-2023-24.pdf" target="_blank">Holiday List</a></li>
              <li><a href="https://cutm.ac.in/campus-facilities/transportation/">Track Your Vehicle</a></li>
              <li><a href="https://cutm.icloudems.com/corecampus/index.php" target="_blank">MIS/ERP Login</a></li>
              <li><a href="https://cutm.ac.in/students-credentials-verification">Student Verification</a></li>
              <li><a href="https://cutm.ac.in/sitemap/" target="_blank">Site Map</a></li>
              <li><a href="wp-content/uploads/Android/Timesheet_V1.apk" target="_blank">CUTM Timesheet APK</a></li>
              <li><a href="wp-content/uploads/Android/COURSEWARE_V1.apk" target="_blank">CUTM Courseware APK</a></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="col-xs-6 col-md-2 col-sm-3 col-xs-12">
            <h2>Admissions</h2>
            
              {/* Add your list items here */}
              <ul className="ftrbtmlink">
              <li><a href="https://cutm.ac.in/admission/">Admission</a></li>
              <li><a href="https://cutm.ac.in/admission/how-to-apply/">How To Apply</a></li>
              <li><a href="https://cutm.ac.in/admission/course-fee/">Course Fee</a></li>
              <li><a href="https://cutm.ac.in/admission/scholarship/">Scholarship</a></li>
              <li><a href="https://cutm.ac.in/admission/refund-policy/">Refund Policy</a></li>
              <li><a href="https://cutm.ac.in/admission/lateral-entry/">Lateral Entry</a></li>
            </ul>
            
          </div>
          {/* Column 3 */}
          <div className="col-xs-6 col-md-3 col-sm-3 col-xs-12">
            <h2>Placements</h2>
            
              {/* Add your list items here */}
              <ul className="ftrbtmlink">
              <li><a href="https://cutm.ac.in/placements/overview/">Overview</a></li>
              <li><a href="https://cutm.ac.in/placements/industry-institutional-linkages/">Industry And Institutional Linkages</a></li>
              <li><a href="https://cutm.ac.in/placements/our-recruiters/">Our Recruiters</a></li>
              <li><a href="https://cutm.ac.in/placements/assessment-partners/">Assessment Partners</a></li>
              <li><a href="https://cutm.ac.in/placements/placement-brochure/">Placement Brochure</a></li>
              <li><a href="https://cutm.ac.in/placements/contact-placement-cell/">Career Development Cell</a></li>
            </ul>
            
          </div>
          {/* Column 4 */}
          <div className="col-xs-6 col-md-2 col-sm-3 col-xs-12">
            <h2>Connect</h2>
          
              {/* Add your list items here */}
              <ul className="ftrbtmlink">
              <li><a href="https://cutm.ac.in/connect/image-gallery/">Image Gallery</a></li>
              <li><a href="https://cutm.ac.in/connect/video-gallery/">Video Gallery</a></li>
              <li><a href="https://cutm.ac.in/connect/media-coverage/">Media Coverage</a></li>
              <li><a href="https://cutm.ac.in/connect/brochure/">Brochure</a></li>
              <li><a href="https://cutm.ac.in/connect/newsletter/">Newsletter</a></li>
              <li><a href="https://cutm.ac.in/connect/event-calendar/">Event Calendar</a></li>
            </ul>
            
          </div>
          {/* Column 5 */}
          <div className="col-md-3 col-sm-3 col-xs-12">
            <h2>Contact Us</h2>
            <ul className="list-unstyled">
              <li>CENTURION UNIVERSITY OF TECHNOLOGY AND MANAGEMENT (CUTM)</li>
              <li style={{ marginTop: '8px' }}>
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                <p>HIG-4, Floor 1 and 2, Jaydev Vihar,Opp Pal Heights, Bhubaneswar, Dist: Khurda, Odisha, India.</p>
              </li>
              {/* Add your social media icons and links here */}
            </ul>
          </div>
        </div>
      </div>
      <div className="copyrightBox bg-danger text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <p>
                <span>© 2023 PHD Dashboard</span> | <a href="/Disclaimer">Disclaimer</a> | <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-use">Terms of Use</a> | <a href="/blog">Blog</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>


    </div>
  );
}
