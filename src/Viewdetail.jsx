import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Viewdetail = () => {
    let {id}=useParams()
    const[data,setdata]=useState([])
    const[datas,setdatas]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get(`http://localhost:8000/api/user/viewprofile/${id}`)
                setdata(response.data)
                console.log(response);
            }
            catch(error){
             console.error("error")
            }
        }
        fetchData()
     },[])
console.log(id);
const handlechange=(event)=>{
    setdatas({...datas,[event.target.name]:event.target.value})
}
const handlesubmit=async(event)=>{
    event.preventDefault()
    const response1=await axios.put(`http://localhost:8000/api/user/update/${id}`,datas)
   setdatas(datas)
    
    alert("edited")
}

  return (
    <div>
         <div>
       
           <form onSubmit={handlesubmit}><div key={data._id}>

                <input name='name' type='text' onChange={handlechange} placeholder={data.name}></input>
                <input name='age' type='text' onChange={handlechange} placeholder={data.age}></input>
                <input name='email' type='text' onChange={handlechange} placeholder={data.email}></input>
                <input name='password' type='text' onChange={handlechange} placeholder={data.password}></input> <button type='submit'>submit</button>
                </div></form> 
   
    </div>
    </div>
  )
}
