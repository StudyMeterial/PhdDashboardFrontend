// import logo from './logo.svg';
import './App.css';
// import './layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';

import Home from './pages/Home';
import { BrowserRouter as router, Routes, Route, BrowserRouter, Router } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import Dashboard from './pages/Dashboard';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs ';
import Services from './components/Services';
import Footer from './layout/Footer';
import AddStudent from './phdfulltimestudent/AddStudent';
import EditStudent from './phdfulltimestudent/EditStudent';
import ViewStudent from './phdfulltimestudent/ViewStudent';
import HomePhdStudent from './pages/HomePhdStudent';
import LoginAdmin from './Loginpage/LoginAdmin';
import AdminHome from './pages/AdminHome';
import Admission from './components/Admission';

import FulltimeHome from './phdfulltimestudent/FulltimeHome';
import HalftimeHome from './users/HalftimeHome';
import Profile from './phdfulltimestudent/Profile';
import Sidebar from './phdfulltimestudent/Sidebar';
import Dashboard1 from './phdfulltimestudent/Dashboard1';
import Assignments from './phdfulltimestudent/Assignments';
import ApplyLeave from './phdfulltimestudent/ApplyLeave';
import Attendence from './phdfulltimestudent/Attendence';
import Report from './phdfulltimestudent/Report';
import Performance from './phdfulltimestudent/Performance';
import ResearchActivity from './phdfulltimestudent/ResearchActivity';
import Salary from './phdfulltimestudent/Salary';
import Profiledemo from './Loginpage/Profiledemo';
import Proctor from './phdfulltimestudent/Proctor';
import SalaryManagement from './pages/SalaryManagment';
import NavbarHalfTime from './layout/NavbarHalfTime';
import SidebarStudent from './users/SidebarStudent';
import LeaveApplicationForm from './phdfulltimestudent/LeaveApplicationForm';
import ApproveLeaveApplication from './phdfulltimestudent/ApproveLeaveApplication';
import LeaveApplicationuser from './users/LeaveApplicationuser';
import ApproveUserLeaveApplication from './users/ApproveUserLeaveApplication';




function App() {
  return (
    <BrowserRouter>
    <div className="App">

     

     
      
    
      {/* <AboutUs/> */}
         <Routes>
             {/* <Route exact path='/homenavbar' element={<Navbar/>}/> */}
             <Route exact path='/' element={<Dashboard/>}/>
             <Route exact path='/admission' element={<Admission/>}/>
             <Route exact path='/service' element={<Services/>}/>
             <Route exact path='/about' element={<AboutUs/>}/>
             <Route exact path='/contact' element={<ContactUs/>}/>
             <Route exact path="/Home" element={ <Home/>}/>
             {/* halftime PHD Student */}
             <Route exact path="/halftimehome" element={<HalftimeHome/>}/>
             <Route exact path="/addUser" element={<AddUser/>}/>
             <Route exact path="/edituser/:id" element={<EditUser/>}/>
             <Route exact path="/viewuser/:id" element={<ViewUser/>}/>
             <Route exact path="/navbarHalftime" element={<NavbarHalfTime/>}/>
             <Route exact path="/sidebarStudent" element={<SidebarStudent/>}/>
             <Route exact path="/leaveapplicationuser" element={<LeaveApplicationuser/>}/>
             <Route exact path="/approveuserleave" element={<ApproveUserLeaveApplication/>}/>
            
             {/* Phd Fulltime Student */}
             <Route exact path="/homephdstudent" element={ <HomePhdStudent/>}/>
             <Route exact path="/addStudent" element={<AddStudent/>}/>
             <Route exact path="/editstudent/:id" element={<EditStudent/>}/>
             <Route exact path="/viewstudent/:id" element={<ViewStudent/>}/>
             <Route exact path="/profile" element={<Profile/>}/>
             <Route exact path="/profiledemo" element={<Profiledemo/>}/>
            
             
            
              {/* fulltime PHD Student */}
              <Route exact path="/fulltimehome" element={<FulltimeHome/>}/>
              <Route exact path="/fulltimesidebar" element={<Sidebar/>}/>
              <Route exact path="/fulltimesidebar" element={<Dashboard1/>}/>
              <Route exact path="/fulltimeassignments" element={<Assignments/>}/>
              <Route exact path="/fulltimeapplyleave" element={<ApplyLeave/>}/>
              <Route exact path="/fulltimeleaveapplication" element={<LeaveApplicationForm/>}/>
              <Route exact path="/approveleaveapplication" element={<ApproveLeaveApplication/>}/>

              <Route exact path="/fulltimeattendence" element={<Attendence/>}/>
              <Route exact path="/fulltimeperformance" element={<Performance/>}/>
              <Route exact path="/fulltimereport" element={<Report/>}/>
              <Route exact path="/fulltimeresearch" element={<ResearchActivity/>}/>
              <Route exact path="/fulltimesalary" element={<Salary/>}/>
              <Route exact path="/fulltimeproctor" element={<Proctor/>}/>
             

      
      


             {/* Login admin,student */}
             <Route exact path="/adminLogin" element={<LoginAdmin/>}/>
             <Route exact path="/adminSalary" element={<SalaryManagement/>}/>
             {/* <Route exact path="/logout" element={<LogoutComponent/>}/> */}

             {/* Admin Home page */}
             <Route exact path="/adminhome" element={<AdminHome/>}/>
            
            
              
        </Routes>

        <Footer/>
        
       
    </div>
    </BrowserRouter>
  );
}

export default App;
