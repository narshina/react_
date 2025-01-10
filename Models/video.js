import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    videoPath: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now }
});

const Video = mongoose.model('Video', VideoSchema);
export default Video;