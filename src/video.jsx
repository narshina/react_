import React, { useState } from "react";
import axios from "axios";

export const AddVideo = () => {
  const [data, setData] = useState({ video: null, title: "" });

  // Handle text input change (title)
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  // Handle file input change (video)
  const handleFileChange = (event) => {
    setData({ ...data, video: event.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Check if a video is selected
    if (!data.video) {
      alert("Please select a video file.");
      return;
    }

    const formData = new FormData();
    formData.append("video", data.video);
    formData.append("title", data.title);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/addvideo", // API endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Video uploaded successfully:", response.data);
      alert("Video uploaded successfully!");
    } catch (error) {
      console.error("Error uploading video:", error.response?.data || error.message);
      alert("Video upload failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Upload a Video</h2>
      <form onSubmit={handleSubmit}>
        <label>Video Title:</label>
        <input type="text" name="title" value={data.title} onChange={handleChange} required />

        <label>Upload Video:</label>
        <input type="file" accept="video/*" name="video" onChange={handleFileChange} required />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
};
