import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Vimage = () => {
    const[data,setdata]=useState([])


    const fetchdata=async()=>{
        try{
            const response=await axios.get('http://localhost:8000/api/product/vimage')
            setdata(response.data)
            console.log(response);
            
        }
        catch(e){
            console.error(e);
            
        }

    }
    useEffect(()=>{
        fetchdata()
    },[])
    console.log("kkkkk",data);
    
  return (
    <div>
        {data.map((item)=>(
          <div>  <img src={`http://localhost:8000/uploads/${item.image}`} alt="" /></div>
        ))}
    </div>
  )
}

export default Vimage