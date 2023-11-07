import React from "react";
import { Link } from "react-router-dom";


export default function AdminHome() {
  return (

    <div>
         <main>
        <h1 class="visually-hidden">Sidebars examples</h1>

        <div
          class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
          style={{ width: 280 }}
        >
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32"></svg>
            <span class="fs-4">Sidebar</span>
          </a>
          <hr />
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <a href="#" class="nav-link active" aria-current="page">
                <svg class="bi me-2" width="16" height="16"></svg>
                Home
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi me-2" width="16" height="16"></svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi me-2" width="16" height="16"></svg>
                Orders
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi me-2" width="16" height="16"></svg>
                Products
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi me-2" width="16" height="16"></svg>
                Customers
              </a>
            </li>
          </ul>
          <hr />
          <div class="dropdown">
            <a
              href="#"
              class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                class="rounded-circle me-2"
              />
              <strong>mdo</strong>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a class="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="b-example-divider"></div>

       
      



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
    </main>
  </div>
  );
}
