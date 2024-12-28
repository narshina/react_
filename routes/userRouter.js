import express from 'express'
import { add, deletedata, login, logins, register, tokenverify, update, view, viewprofile } from '../controllers/usercontroller.js'
import verifyToken from '../Middlewares/auth.js'

const userRouter=express.Router()


userRouter.post("/add",add)
userRouter.get("/view",view)
userRouter.put("/update/:id",update)
userRouter.delete("/deletedata/:id",deletedata)
userRouter.post("/login",login)
userRouter.post('/register',register)
userRouter.get('/viewprofile/:id', verifyToken,viewprofile)
userRouter.post('/logins',logins)
userRouter.get('/tokenverify/:id', verifyToken, tokenverify)  



export default userRouter