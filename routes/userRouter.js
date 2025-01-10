import express from 'express'
import { add, addresort, deletedata, login, logins, register, update, view, viewprofile, vresort } from '../controllers/usercontroller.js'
import verifyToken from '../Middlewares/auth.js'
import { upload } from "../multer.js";
import { addVideo, getVideos } from '../controllers/productcontroller.js';


const userRouter=express.Router()


userRouter.post("/add",add)
userRouter.get("/view",view)
userRouter.put("/update/:id",update)
userRouter.delete("/deletedata/:id",deletedata)
userRouter.post("/login",login)
userRouter.post('/register',register)
userRouter.get('/viewprofile/:id', verifyToken,viewprofile)
userRouter.post('/logins',logins)
userRouter.post('/addresort',upload.single("image"),verifyToken, addresort)
userRouter.post('/addvideo', upload.single('video'), addVideo);
userRouter.get('/viewresort',verifyToken,vresort)
userRouter.get('/vi',getVideos)    

export default userRouter