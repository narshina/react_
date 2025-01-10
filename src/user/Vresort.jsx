import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Vresort = () => {
    const token = localStorage.getItem('token');
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/user/viewresort`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(response.data);
                setFilteredData(response.data);
                console.log("User Data:", response.data);
            } catch (error) {
                console.error("Error fetching user data:", error.response?.data || error.message);
                alert("Unauthorized. Please login again.");
            }
        };
        fetchData();
    }, []);


    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchTerm(searchValue);
        setFilteredData(
            data.filter((item) =>
                item.location.toLowerCase().includes(searchValue)
            )
        );
    };

    return (
        <div className="bg-gray-100 min-h-screen p-5">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Available Resorts</h1>
            
        
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search by location..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData.map((item) => (
                    <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src={`http://localhost:8000/uploads/${item.image}`}
                            alt={item.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                            <p className="text-gray-600 mt-1">
                                <span className="font-semibold">Location:</span> {item.location}
                            </p>
                            <p className="text-gray-800 mt-1">
                                <span className="font-semibold">Price:</span> ${item.price}
                            </p>
                            <button>Book now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vresort;
