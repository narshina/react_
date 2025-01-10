import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Vvideo = () => {
        const [data, setdata] = useState([]);
        const fetchdata=async()=>{
            try{
                const response=await axios.get('http://localhost:8000/api/user/vi')
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
        <h2>hell</h2>
    {data.map((video) => (
        <div key={video._id}>
            <h2>{video.title}</h2>
            <p>{video.description}</p>
            <video width="400" controls>
                <source src={`http://localhost:8000/${video.videoPath}`} type="video/mp4" />
                Your browser does not support HTML video.
            </video>
        </div>
    ))}
</div>
  )
}

export default Vvideo