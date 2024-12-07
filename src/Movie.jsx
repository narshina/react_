import axios from 'axios'
import React, { useState } from 'react'

export const Movie = () => {

const[data,setdata]=useState([])
const[search,setsearch]=useState('')

const fetchdata=async()=>{
 try{
    const response=await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=a5ef1268`)
    setdata(response.data.Search)
    console.log(response.data.Search);
    
 }
 catch(error){
console.error(error);

 }
}
console.log(data);

const handlechange=(event)=>{
    setdata(event.target.value)
}


  return (
    <div>
        <input onChange={handlechange}></input>
        <button onClick={fetchdata}>click</button>
    </div>
  )
}
