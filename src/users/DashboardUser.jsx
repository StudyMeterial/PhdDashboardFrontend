import React from "react";
import leave from "./ftimage/leave.jpg";
import { Link } from "react-router-dom";
import Proctor from "./ftimage/Proctor.jpg";
import Profile from "./ftimage/Profile.jpg";
import Report from "./ftimage/Report.jpg";
import Research from "./ftimage/Research.jpg";
import Assignment from "./ftimage/Assigment.jpg";

const Dashboard1 = () => {
  return (
    <>
      <div className="row "  style={{ background: '#d4edda' }}>
        <div className="container col-md-2 ">
          <Link to="/approveuserleave">
            {" "}
            {/* Update the route path */}
            <img
              className="card-img-top shadow-effect"
              src={leave}
              alt="Card image cap"
              style={{
                width: "70px",
                height: "70px",
                marginTop: "5rem",
              }}
            />
            <h5>Apply Leave</h5>
          </Link>
        </div>

        <div className="container col-md-2 ">
          <Link to="/fulltimeassignments">
            {" "}
            <img
              class="card-img-top shadow-effect"
              src={Assignment}
              alt="Card image cap"
              style={{  width: "70px",
              height: "70px", marginTop: "5rem" }}
            />
            <h5>Assignments</h5>
          </Link>
        </div>

        <div className="container col-md-2 ">
          <Link to="/attendence">
            {" "}
            <img
              class="card-img-top shadow-effect"
              src={leave}
              alt="Card image cap"
              style={{ width: "70px",
              height: "70px", marginTop: "5rem" }}
            />
            <h5>Attendence</h5>
          </Link>
        </div>
        <div className="container col-md-2 ">
          <Link to="/fulltimeperformance">
            {" "}
            <img
              class="card-img-top shadow-effect"
              src={leave}
              alt="Card image cap"
              style={{  width: "70px",
              height: "70px",marginTop: "5rem" }}
            />
            <h5>Performance</h5>
          </Link>
        </div>
        <div className="container col-md-2 ">
          <Link to="/fulltimeproctor">
            {" "}
            <img
              class="card-img-top shadow-effect"
              src={Proctor}
              alt="Card image cap"
              style={{  width: "70px",
              height: "70px", marginTop: "5rem" }}
            />
            <h5>Proctor</h5>
          </Link>
        </div>
       
        <div className="container col-md-2 ">
          <Link to="/fulltimereport">
            {" "}
            <img
              class="card-img-top shadow-effect"
              src={Report}
              alt="Card image cap"
              style={{  width: "70px",
              height: "70px", marginTop: "5rem" }}
            />
            <h5>Report</h5>
          </Link>
        </div>
        <div className="container col-md-2 ">
          <Link to={"/Report}"}>
            {" "}
            <img
              class="card-img-top shadow-effect"
              src={leave}
              alt="Card image cap"
              style={{  width: "70px",
              height: "70px", marginTop: "5rem" }}
            />
            <h5>Student</h5>
          </Link>
        </div>
        <div className="container col-md-2 ">
          <Link to="/profiledemo">
            {" "}
            <img
              class="card-img-top shadow-effect"
              src={Profile}
              alt="Card image cap"
              style={{ width: "70px",
              height: "70px", marginTop: "5rem" }}
            />
            <h5>Profile</h5>
          </Link>
        </div>
        <div className="container col-md-2 ">
          <Link to="/profiledemo">
            {" "}
            <img
              class="card-img-top shadow-effect"
              src={leave}
              alt="Card image cap"
              style={{  width: "70px",
              height: "70px", marginTop: "5rem" }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard1;
