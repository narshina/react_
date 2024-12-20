import express from 'express'
import { add, deletedata, login, logins, register, update, view, viewprofile } from '../controllers/usercontroller.js'

const userRouter=express.Router()


userRouter.post("/add",add)
userRouter.get("/view",view)
userRouter.put("/update/:id",update)
userRouter.delete("/deletedata/:id",deletedata)
userRouter.post("/login",login)
userRouter.post('/register',register)
userRouter.get('/viewprofile/:id',viewprofile)
userRouter.post('/logins',logins)



export default userRouter