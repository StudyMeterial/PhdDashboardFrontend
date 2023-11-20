import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import NavbarAdmin from "../layout/NavbarAdmin";

export default function HomePhdStudent() {
  const [phdstudentfts, setphdstudentfts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/phdstudentfts");
      setphdstudentfts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/phdstudentft/${id}`);
    loadUsers();
  };

  return (
    <>
    <NavbarAdmin/>
    <div className="container">
      <div className="py-4">
        <Link className="btn btn-outline-primary" to={`/addStudent`}>
          Add PhdStudent
        </Link>
        <table className="table border shadow">
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
            {phdstudentfts.map((student, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{student.fullname}</td>
                <td>{student.email}</td>
                <td>{student.username}</td>
                <td>{student.password}</td>
                <td>{student.phdStudent}</td>
                <td>{student.qualification}</td>
                <td>{student.village}</td>
                <td>{student.dist}</td>
                <td>{student.state}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewstudent/${student.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editstudent/${student.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(student.id)}
                  >
                    Delete
                  </button>
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
