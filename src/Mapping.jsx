import React, { useState } from 'react'
import img from './img.jpg';
import './style.css'
import { Link} from 'react-router-dom';

export const Mapping = () => {

const[count,setcount]=useState(0)
const[data,setdata]=useState([])
let incrememt=()=>{
  setcount(count+1)
}
let decrememt=()=>{
  if(count!=0)
  setcount(count-1)
}


let adddata=()=>{
setdata([{name:"hhh",age:56},{name:"hhh",age:77}])
}
console.log(data);

  return (
    
   
<div>
 <h2>{count}</h2>
  <button onClick={incrememt}>incrememt</button>
  <button onClick={decrememt}>decrememt</button>
 <button onClick={adddata}>add</button>
 <div>{data.map((item)=>(
<div><p>{item.name}</p></div>
 ) )}  </div>
</div>

    
  )
}
