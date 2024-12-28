import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
    let id=localStorage.getItem('id')
    
    const[data,setdata]=useState('')
  const[refresh,setrefresh]=useState('')
  const navigate=useNavigate()
  useEffect(()=>{
    let token=localStorage.getItem('token')
    let fetchdata=async()=>{
        try{

            let response=await axios.get(`http://localhost:4000/view/${id}`,{
                headers:{
                    Authorization:token
                }
            })
            console.log(response);
            setdata(response.data)
        }
        catch(e){

            console.log(e.response.data);
           
        }
    }
    

        fetchdata()
    
  
},[refresh])
  return (
    <div>Auth</div>
  )
}

export default Auth