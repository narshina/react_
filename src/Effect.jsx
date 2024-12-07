import React, { useEffect, useState } from 'react'

export const Effect = () => {

const[count,setCount]=useState(0)
const[count1,setCount1]=useState(0)
useEffect(()=>{
    {console.log("running")}
},[])
  return (
    <div>
        <h2>{count}</h2>
        <button  onClick={()=>setCount(count+1)}>increment</button>
       <h2>{count1}</h2>
        <button onClick={()=>setCount1(count1+1)}>increment</button>     
    </div>
  )
}
