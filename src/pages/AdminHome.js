import React from "react";
// import { Link } from "react-router-dom";
import NavbarAdmin from "../layout/NavbarAdmin";
// import ApproveLeaveApplication from "../phdfulltimestudent/ApproveLeaveApplication";



export default function AdminHome() {
  return (

    <>
     <NavbarAdmin/>
    <div className="container d-flex justify-content-center align-items-center" style={{margin:'100px'}}>
      <div className="row">
        <div className="col-3">
          <div className="card text-white bg-success" style={{ maxWidth: '18rem' }}>
            <div className="card-header">List Of PHD FullTime Student</div>
            <div className="card-body">
              <h5 className="card-title">PHD FullTime Student</h5>
              
              <a href="/homephdstudent" className="btn btn-warning">Show Student !!</a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card text-white bg-success" style={{ maxWidth: '18rem' }}>
            <div className="card-header">List of HalfTime Student</div>
            <div className="card-body">
              <h5 className="card-title">PHD HalfTime Student</h5>
             
              <a href="/Home" className="btn btn-warning">Show Student !!</a>
            </div>
          </div>
        </div>
      
      <div className="col -3">
          <div className="card text-white bg-success" style={{ maxWidth: '18rem',marginLeft:'20px' }}>
            <div className="card-header">Salary of phdfulltimestudent</div>
            <div className="card-body">
              <h5 className="card-title">Monthly Salary FullTime Student</h5>
             
              <a href="/adminSalary" className="btn btn-warning">Salary Manage !!</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3 ">
          <div className="card text-white bg-success" style={{ maxWidth: '18rem',marginLeft:'20px' }}>
            <div className="card-header">Leave Application List </div>
            <div className="card-body">
              <h5 className="card-title">Leave Application FullTime Student</h5>
             
              <a href="/approveleaveapplication" className="btn btn-warning">Salary Manage !!</a>
            </div>
          </div>
        </div>
        </div>
    </>

  );
}
