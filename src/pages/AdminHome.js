import React from "react";
// import { Link } from "react-router-dom";
import NavbarAdmin from "../layout/NavbarAdmin";
import { Table } from "react-bootstrap";
// import Dashboard1 from "../phdfulltim?estudent/Dashboard1";
// import ApproveLeaveApplication from "../phdfulltimestudent/ApproveLeaveApplication";



export default function AdminHome(props) {
  return (

    <>
  <NavbarAdmin />
 
  <div className="bg-secondary">
  <div className="container" >
    <div className="row" style={{ margin: '100px' }}>
    <div className="col-md-3 p-4">
    <div className="card text-white bg-success rounded rounded-pill" style={{ maxWidth: '18rem' }}>
      
      <div className="card-body">
        <h5 className="card-title">{props.title1}</h5>
        <a href="/homephdstudent" className="btn btn-warning rounded-pill ">Show Student !!</a>
      </div>
    </div>
  </div>


    

      <div className="col-md-3" >
      <div className="card text-white bg-success rounded rounded-pill" style={{ maxWidth: '18rem' }}>

          <div className="card-body">
            <h5 className="card-title">{props.title2}</h5>
            <a href="/Home" className="btn btn-warning rounded-pill">Show Student !!</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card text-white bg-success rounded rounded-pill" style={{ maxWidth: '18rem', marginLeft: '20px' }}>
        
          <div className="card-body">
            <h5 className="card-title">{props.title3}</h5>
            <a href="/adminSalary" className="btn btn-warning  rounded-pill">Salary Manage !!</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card text-white bg-success rounded rounded-pill" style={{ maxWidth: '18rem', marginLeft: '20px' }}>
        
          <div className="card-body">
            <h5 className="card-title">{props.title4}</h5>
            <a href="/approveleaveapplication" className="btn btn-warning rounded-pill">Leave Approve!!</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card text-white bg-success  rounded rounded-pill" style={{ maxWidth: '18rem', marginLeft: '20px' }}>
          
          <div className="card-body">
            <h5 className="card-title">{props.title5}</h5>
            <a href="/approveuserleave" className="btn btn-warning  rounded-pill">Leave Approve!!</a>
          </div>
        </div>
      </div>
      <div className="col-md-3" >
        <div className="card text-white bg-success rounded rounded-pill" style={{ maxWidth: '18rem', marginLeft: '20px' }}>
        
          <div className="card-body">
            <h5 className="card-title">{props.title6}</h5>
            <a href="/assignmentlistuser" className="btn btn-warning  rounded-pill">Assignment half
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card text-white bg-success rounded rounded-pill" style={{ maxWidth: '18rem', marginLeft: '20px' }}>
          <div className="card-body">
            <h5 className="card-title">{props.title7}</h5>
            <a href="/assignmentlistf" className="btn btn-warning  rounded-pill">Assignment Full
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card text-white bg-success rounded rounded-pill" style={{ maxWidth: '18rem', marginLeft: '20px' }}>
         
          <div className="card-body">
            <h5 className="card-title">{props.title8}</h5>
            <a href="/attendencesubmit" className="btn btn-warning rounded-pill">Attendence  
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</>


  );
}
AdminHome.defaultProps = {
  title1: 'PHD HalfTime Student',
  title2:'PHD HalfTime Student',
  title3:'Salary FullTime Student',
  title4:'Leave Fulltime List',
  title5:'Leave Halftime List',
title6:"Assignment List HalfTime "
,title7:"Assignment List Fulltime ",
title8:"Attendence HalfTime"

};