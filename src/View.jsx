import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const View = () => {

    const[data,setdata]=useState([])
    const[search,setsearch]=useState('')
    const[show,setshow]=useState(false)
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get('http://localhost:8000/api/user/view')
                setdata(response.data)
                console.log(response);
            }
            catch(error){
             console.error("error")
            }
        }
        fetchData()
     },[])


     const filteredata=data.filter(item=>
      item.name.toLowerCase().includes(search.toLocaleLowerCase())
 );

 const handlesearchchange=(event)=>{
setsearch(event.target.value)
 }


let handledelete=(id)=>{
  const response=axios.delete(`http://localhost:8000/api/user/deletedata/${id}`)
  console.log(response);
  

}

  
  return (
    <div>

      <div>
        <input type="text" value={search} onChange={handlesearchchange} />
      
      </div>
        {filteredata.map((item)=>(
           <form ><div key={item._id}>

                <input name='name' type='text' placeholder={item.name}></input>
                <input name='age' type='text'  placeholder={item.age}></input>
                <input name='email' type='text'  placeholder={item.email}></input>
                <input name='password' type='text'  placeholder={item.password}></input> 
               <Link to={`/update/${item._id}`}> <button type='submit' >submit</button></Link>
               <button onClick={()=>handledelete(item._id)}>delete</button>
                </div></form> 
        ))}
    </div>
  )
}
