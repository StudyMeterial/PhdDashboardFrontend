import React from "react";
import { Link } from "react-router-dom";


export default function NavbarAdmin(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-effect">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link className="btn btn-primary" to={`/adminhome`}>
                 {props.home}
                </Link>
              </li>
              <li class="nav-item">
                <Link className="btn btn-primary" to={`/homephdstudent`}>
                 {props.fulltime}
                </Link>
              </li>
              <li class="nav-item active">
                <Link className="btn btn-primary" to={`/Home`}>
                  {props.halftime}
                </Link>
              </li>
              <li class="nav-item">
                <Link className="btn btn-primary" to={`/attendencesubmit`}>
                 {props.attendence}
                </Link>
              </li>
              <li class="nav-item">
                <Link className="btn btn-primary" to={`/adminSalary`}>
                 {props.salary}
                </Link>
              </li>
              <li class="nav-item">
                <Link className="btn btn-primary" to={`/approveleaveapplication`}>
                 {props.ftleave}
                </Link>
              </li>
              <li class="nav-item">
                <Link className="btn btn-primary" to={`/approveuserleave`}>
                 {props.halfleave}
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
NavbarAdmin.defaultProps = {
  title: 'Admin DashBoard',
  home:'Home',
  fulltime:'List PhdStudent',
  halftime:'List Student',
  attendence:'Attendence',
salary:"Salary"
,ftleave:"Fulltime Leave",
halfleave:"Halftime Leave"

};