import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "flowbite";
import axios from 'axios';

export const Form = () => {


    const[data,setData]=useState('')

    const handlechange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const handlesubmit= async (event)=>{
        event.preventDefault('')
        let response=await axios.post('http://localhost:8000/api/user/add',data)
        setData(data)
        console.log(data);
        console.log(response);
        
    }

    
  
        


  return (
   <div>
    
<form onSubmit={handlesubmit}>
<label >name</label>
<input type='text' name='name' onChange={handlechange}></input>
<label >age</label>
<input type='text' name='age' onChange={handlechange}></input>
<label >email</label>
<input type='text' name='email' onChange={handlechange}></input>
<label >password</label>
<input type='text' name='password' onChange={handlechange}></input>
<button type='submit'>submit</button>
</form>


   </div>
  )
}
