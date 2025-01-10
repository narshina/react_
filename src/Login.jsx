// import axios from 'axios';
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  const [data, setdata] = useState({}); 

  const handlechange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/user/logins', data, {
        headers: {
          'Content-Type': 'application/json', 
        }
      });
            console.log( "--------",response);

      if (response.data) {
        localStorage.setItem('id', response.data._id); 
        localStorage.setItem('token', response.data.token); 
        toast.success(response.data.message);
        navigate('/vprofile') 
      } else {
        alert('Invalid Response from Server');
      }
    } catch (e) {
      console.error('Login failed:', e);
    }
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>Username</label>
        <input name="email" onChange={handlechange} type="text" />
        <label>Password</label>
        <input name="password" onChange={handlechange} type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
