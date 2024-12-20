import express from "express"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import cors from 'cors'
import jwt from "jsonwebtoken"


const app = express()
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'));


connectDB();
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

app.listen(8000, () => {
    console.log("running");
})