import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Weather = () => {

  const[data,setData]=useState([])
  const[search,setSearch]=useState('')

 
    const fetchdata=async()=>{
        const response=await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=a5ef1268`)
        setData(response.data.Search)
        console.log(response.data.Search);
        
    }
 const handlechange=(e)=>{
    setSearch(e.target.value)
 }
console.log(data);

  return (
    <div>
        <input onChange={handlechange}></input>
        <button onClick={fetchdata}>click</button>
        {data && data.map((item)=>(
           <div> <h2>{item.Year}</h2>
            <h2>{item.Title}</h2><Link to={`/detail/${item.imdbID}`}><img src={item.Poster}></img></Link></div>

        ))}
    </div>
  )
}
