import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import DashboardUser from "./DashboardUser";
// import Dashboard1 from "./Dashboard1";

const SidebarStudent = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/approveuserleave",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/approveuserleave",
      name: "Apply Leave",
      icon: <FaUserAlt />,
    },
    {
      path: "/fulltimeassignments",
      name: "Assignments",
      icon: <FaRegChartBar />,
    },
    {
      path: "/fulltimeattendence",
      name: "Attendence",
      icon: <FaCommentAlt />,
    },
    {
      path: "/fulltimeperformance",
      name: "Performance",
      icon: <FaShoppingBag />,
    },
    {
      path: "/fulltimereport",
      name: "Report",
      icon: <FaThList />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
    
  ];
  return (
    <>
      
      <div className="row " style={{ background: '#d4edda' }}>
        <div className="container col-md-2">
          <div className="container">
            <div
              style={{ width: isOpen ? "200px" : "50px" }}
              className="sidebar"
            >
              <div className="top_section">
                <h1
                  style={{ display: isOpen ? "block" : "none" }}
                  className="logo"
                >
                  Logo
                </h1>
                <div
                  style={{ marginLeft: isOpen ? "50px" : "0px" }}
                  className="bars"
                >
                  <FaBars onClick={toggle} />
                </div>
              </div>
              {menuItem.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className="link"
                  activeclassName="active"
                >
                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                </NavLink>
              ))}
            </div>
            <main>{children}</main>
          </div>
        </div>

      
        <div className="container col-md-10">
        <DashboardUser/>
        </div>
       
      </div>
     
    </>
  );
};

export default SidebarStudent;
