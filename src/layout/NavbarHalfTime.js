import React from "react";
import { Link } from "react-router-dom";


export default function NavbarHalfTime() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-effect">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            HalfTime PHDStudent DashBoard
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link className="btn btn-primary" to={`/`}>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="btn btn-primary" to={`/service`}>
                  Services
                </Link>
              </li>
              <li class="nav-item active">
                <Link className="btn btn-primary" to={`/about`}>
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link className="btn btn-primary" to={`/contact`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        
          <form class="form-inline my-2 my-lg-0" style={{marginRight:"2rem"}}>
            <Link className="btn btn-danger" to={`/`}>
              Logout
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
}
