import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Viewprofile = () => {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    const [data, setdata] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/user/viewprofile/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Send token in Bearer format
                    },
                });
                setdata(response.data);
                console.log("User Data:", response.data);
            } catch (error) {
                console.error("Error fetching user data:", error.response?.data || error.message);
                alert("Unauthorized. Please login again.");
                navigate('/log'); // Redirect to login on error
            }
        };
        fetchData();
    }, [id, token, navigate]);

    const logout = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        navigate('/log'); // Navigate to login
    };

    return (
        <div>
            <h2>{data.name}</h2>
            <h2>{data.age}</h2>
            <h2>{data.email}</h2>
            
            <button onClick={logout}>Logout</button>
        </div>
    );
};
