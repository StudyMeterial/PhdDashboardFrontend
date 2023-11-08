import React from "react";

import { Link } from "react-router-dom";
import dash2 from "./dash2.jpg";
import dash3 from "./dash3.jpg";
import dash4 from "./dash4.jpg";
import dash5 from "./dash5.jpg";
import Navbar from "../layout/Navbar";

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
        className="card bg-primary shadow-effect"
        style={{ bottom: "3rem", top: "3rem" }}
      >
        <div className="card-body">
          {/* Content for the card */}
          <marquee behavior="scroll" direction="right">
            This is a square card with a primary background color and shadow
            effect.
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

     
    </div>
  );
}
