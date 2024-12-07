import axios from 'axios';
import React, { useState } from 'react';

export const Fetch = () => {
    const [data, setData] = useState([]);

    const fetchata = async () => {
    
            const response1 = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setData(response1.data);         
    };

    console.log(data);

    return (
        <div>
            <button onClick={fetchata}>Click</button>
           
            <ul>
                {data.map((user) => (
                 <div>  <li>{user.title}</li>
                    <li>{user.userId}</li>
                    <li>{user.completed}</li></div> 
                ))}
            </ul>
        </div>
    );
};
