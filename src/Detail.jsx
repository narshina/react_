import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
const[data,setdata]=useState('')
    const{id}=useParams()
    console.log(id);
    
    useEffect(()=>{
        const fetchdata=async()=>{
            const response=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`)
            setdata(response.data)
            console.log(response.data);
            
        }
        fetchdata()
    },[id])
    console.log(data);
    
  return (
    <div> <img src={data.Poster} alt="" />
    <h2>{data.Title}</h2>
    <h2>{data.Awards}</h2>
    <h2>{data.Year}</h2>
    <h2>{data.Rated}</h2>
    <h2>{data.Released}</h2></div>
  )
}
