import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddStudent() {
  let navigate = useNavigate();

  const [phdstudent_fulltime, setphdstudent_fulltimes] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    qualification: "",
    phdStudent:"",
    village: "",
    dist: "",
    state: "",
  });

  const {
    fullname,
    email,
    username,
    password,
    qualification,
    phdStudent,
    village,
    dist,
    state,
  } = phdstudent_fulltime;
  const onInputChange = (e) => {
    setphdstudent_fulltimes({
      ...phdstudent_fulltime,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/phdstudentft", phdstudent_fulltime);
    navigate("/homephdstudent");
  };

  return (
    <div
      className=" bg-secondary  text-white"
      style={{ paddingTop: "8rem", paddingBottom: "7rem" }}
    >
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow-effect bg-success text-white ">
          <h2 className="text-center m-4">PHD FullTime Admission Form</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Fullname
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your fullname"
                name="fullname"
                value={fullname}
                onChange={(e) => onInputChange(e)}
                required // Add the required attribute here
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"email"}
                className="form-control"
                placeholder="Enter your Email Adress"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
  required // Add the required attribute here

              />
            </div>

            <div className="mb-3">
              <label htmlFor="UserName" className="form-label">
                username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="UserName" className="form-label">
                password
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="UserName" className="form-label">
                qualification
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your qualification"
                name="qualification"
                value={qualification}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
           

            <div className="mb-3">
              <label htmlFor="UserName" className="form-label">
                village
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your village"
                name="village"
                value={village}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="UserName" className="form-label">
                dist
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your dist"
                name="dist"
                value={dist}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="UserName" className="form-label">
                state
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your state"
                name="state"
                value={state}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="UserName" className="form-label">
               Type Student
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Student Type"
                name="phdStudent"
                value={phdStudent}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
