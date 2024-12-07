import mongoose from "mongoose"

export const connectDB = async ()=>{ 
    mongoose.connect('mongodb://127.0.0.1:27017/batch1')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));
}