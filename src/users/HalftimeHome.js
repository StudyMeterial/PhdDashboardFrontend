import React from "react";
// import { Link } from "react-router-dom";


export default function HalftimeHome() {
  return (

    <div>
        
       <h3>This is Halftime PHD Home page</h3>
       <p>In this modified version, if either the admin or admission object is null, the method will return "Invalid username or password." This prevents trying to access the getPassword() method on a null object, which was causing the NullPointerException.

Additionally, ensure that your database records are correctly populated, and the findByUsername methods in your repositories are working as expected to find the users based on the provided username. Double-check your database entries and the values you're sending in the login request to make sure they match.</p>
      
  </div>
  );
}
