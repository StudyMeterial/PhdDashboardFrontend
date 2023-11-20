import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import NavbarAdmin from "../layout/NavbarAdmin";
// import NavbarHalfTime from "../layout/NavbarHalfTime";
// import Navbar from "../layout/Navbar";

export default function Home() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <>
    <NavbarAdmin/>
    <div className="container" >
      <div className="py-4">
        <Link className="btn btn-outline-primary" to={`/addUser`}>
          Add User
        </Link>
        <table className="table border shadow" style={{padding:'50px'}}>
          <thead>
            <tr>
            <th scope="col">#</th>
              <th scope="col">Fullname</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Qualification</th>
              <th scope="col">Student</th>
              <th scope="col">Village</th>
              <th scope="col">District</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                 <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.qualification}</td>
                <td>{user.phdStudentHalf}</td>
                <td>{user.village}</td>
                <td>{user.dist}</td>
                <td>{user.state}</td>
                <td>
                 <div className="container"> <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    Profile
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
