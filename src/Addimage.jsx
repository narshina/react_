import React, { useState } from "react";
import axios from "axios";

export const Addimage = () => {
  const [data, setdata] = useState({ image: null, quantity: "" });

  const handlechange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value });
  };

  const handlefile = (event) => {
    setdata({ ...data, image: event.target.files[0] });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("quantity", data.quantity);
    console.log(formData);
    

    try {
      const response = await axios.post(
        "http://localhost:8000/api/product/addproduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
      <form onSubmit={handlesubmit}>
        <label>Image:</label>
        <input onChange={handlefile} type="file" name="image" />
        <label>Quantity:</label>
        <input onChange={handlechange} type="text" name="quantity" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
