import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewStudent() {
     const [phdstudentft,setphdstudentfts]=useState({
        fullname:"",
        username:"",
        email:""
     })

   const {id}=useParams();

   useEffect(()=>{
    loadUser()
        
   },[])

   const loadUser=async()=>{
    const result=await axios.get(`http://localhost:8080/phdstudentft/${id}`)
    setphdstudentfts(result.data)
   }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
           <h2 className='text-center m-4'>PhdStudent Details</h2>

           <div className='card'>
             <div className='card-header'>
                Details of User Id : {phdstudentft.id}
                  <ul className="list-group list-group-flush">
                    <li className='list-group-item'>
                        <b>Name:</b>
                          {phdstudentft.fullname}
                    </li>
                    <li className='list-group-item'>
                        <b>userName:</b>
                        {phdstudentft.username}
                    </li>
                    <li className='list-group-item'>
                        <b>Email:</b>
                        {phdstudentft.email}
                    </li>
                  </ul>
                  
             </div>
           </div>
           <Link className='btn btn-primary my-2' to={"/homephdstudent"}>Back to Home</Link>
         </div>
    </div>
</div>
  )
}
