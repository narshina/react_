import axios from 'axios';
import React, { useState } from 'react'

const Addresort = () => {
  const token = localStorage.getItem('token');
  const [data, setdata] = useState({ name: "", location: "", price: "", address: "", image: null });

  const handlechange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value });
  };

  const handlefile = (event) => {
    setdata({ ...data, image: event.target.files[0] });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("location", data.location);
    formData.append("price", data.price);
    formData.append("address", data.address);
    formData.append("image", data.image);
    console.log(formData);
    

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/addresort",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (e) {
      console.error("Error: ", e.response?.data || e.message);
    }
  };
  return (
    <div>
        <form action="" onSubmit={handlesubmit}>
            <label htmlFor="">Name</label>
            <input onChange={handlechange} name='name' type="text" />
            <label htmlFor="">Location</label>
            <input onChange={handlechange} name='location' type="text" />
            <label htmlFor="">Price</label>
            <input onChange={handlechange} name='price' type="text" />
            <label htmlFor="">address</label>
            <input onChange={handlechange} name='address' type="text" />
            <label htmlFor="">image</label>
            <input onChange={handlefile} name='image' type="file" />
<button>submit</button>
        </form>
    </div>
  )
}

export default Addresort