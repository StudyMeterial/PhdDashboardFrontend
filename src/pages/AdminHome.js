import React from "react";
import { Link } from "react-router-dom";
import NavbarAdmin from "../layout/NavbarAdmin";



export default function AdminHome() {
  return (

    <>
     <NavbarAdmin/>
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="row">
        <div className="col">
          <div className="card text-white bg-success" style={{ maxWidth: '18rem' }}>
            <div className="card-header">List Of PHD FullTime Student</div>
            <div className="card-body">
              <h5 className="card-title">PHD FullTime Student</h5>
              <p className="card-text">
              Highly motivated Ph.D. full-time student skilled in effective administrative management. Proficient in handling diverse tasks with precision.
              </p>
              <a href="/homephdstudent" className="btn btn-warning">Show Student >></a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white bg-success" style={{ maxWidth: '18rem' }}>
            <div className="card-header">List of HalfTime Student</div>
            <div className="card-body">
              <h5 className="card-title">PHD HalfTime Student</h5>
              <p className="card-text">
              Diligent Ph.D. half-time student adept at efficient administrative handling and organization. Committed to managing tasks effectively.
              </p>
              <a href="/Home" className="btn btn-warning">Show Student >></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}
