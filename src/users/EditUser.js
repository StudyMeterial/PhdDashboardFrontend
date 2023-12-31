import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

    let navigate =useNavigate()

    const {id}=useParams()
    const [user,setUsers]=useState({
      userName:"",
      password:""

    })

    const{password,username}=user
    const onInputChange=(e)=>{
        setUsers({ ...user,[e.target.name]:e.target.value})
       
    }
    useEffect(()=>{
        loadUser()
    },[])

    const onSubmit=async(e)=>{
            e.preventDefault();
             await axios.put(`http://localhost:8080/user/${id}`,user)
             navigate("/")

    }
const loadUser=async()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`)
    setUsers(result.data)

}
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>

           <h2 className='text-center m-4'>Edit User</h2>
           <form onSubmit={(e)=>onSubmit(e)}>
            
             <div className='mb-3'>
                <label htmlFor='UserName' className='form-label'>
                    UserName
                </label>
               <input type={"text"}
                className="form-control"
                placeholder="Enter your Username"
                name="userName"
                value={username}
                onChange={(e)=>onInputChange(e)}/>
             </div>
             <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>
                    Email
                </label>
               <input type={"password"}
                className="form-control"
                placeholder="Enter your Email Adress"
                name="password"
                value={password}
                onChange={(e)=>onInputChange(e)}/>
             </div>
             <button type='submit' className='btn btn-outline-primary'>Submit</button>
             <Link type='submit' className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
             </form>
        </div>
      </div>
    </div>
  )
}
