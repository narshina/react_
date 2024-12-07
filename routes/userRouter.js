import express from 'express'
import { add, deletedata, login, register, update, view } from '../controllers/usercontroller.js'

const userRouter=express.Router()


userRouter.post("/add",add)
userRouter.get("/view",view)
userRouter.put("/update/:id",update)
userRouter.delete("/deletedata/:id",deletedata)
userRouter.post("/login",login)
userRouter.post('/register',register)



export default userRouter