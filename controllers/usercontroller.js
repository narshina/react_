import { response } from "express"
import user from "../Models/user.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';
import verifyToken from "../Middlewares/auth.js";


const add = async (req, res) => {
    let newuser = new user(req.body)
    let response = await newuser.save()
    res.json(response)
    console.log(response);

}

const view = async (req, res) => {
    let response = await user.find()
    res.json(response)
}

const update = async (req, res) => {
    let id = req.params.id
    let response = await user.findByIdAndUpdate(id, req.body)
    res.json(response)
}

const deletedata = async (req, res) => {
    let id = req.params.id
    let response = await user.findByIdAndDelete(id)
    res.json(response)

}
const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        let users = await user.findOne({ email: email });
        if (!users) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }
        if (users.password === password) {
            console.log("Login successful");
            return res.json(users);
            
        } else {
            console.log("Invalid password");
            return res.status(401).json({ message: "Invalid password" });
        }
       
    } catch (error) {

        console.error("Error during login:", error);
        return res.status(500).json({ message: "An error occurred during login" });
    }
};
const register= async(req,res)=>{
     try{
        const existingmail = await user.findOne({ email:req.body.email });

        if(existingmail){
            return res.status(400).json('mail already exist');        

        }
             const hashedPassword=await bcrypt.hash(req.body.password,10)
             console.log(hashedPassword);
             const userData={...req.body,password:hashedPassword}
             
             const newuser=await new user(userData)
             const saveduser=await newuser.save()
            return res.json(saveduser)
             
     }
     catch(e){
        console.error(e);
       return res.status(500).json({message:"error occured during register"})
     }
}

const viewprofile = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const response = await user.findById(id);
        if (!response) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(response);
        console.log("User data:", response);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user data", error: error.message });
    }
};


const logins=async(req,res)=>{
    try{
        const {email,password}=req.body
        let response=await user.findOne({email:email})
        if(!response){
            return res.status(500).json("user not found")
        }
        console.log(response);
        let matchedpassword=await bcrypt.compare(password,response.password)
        console.log(matchedpassword);
        if(!matchedpassword){
            return res.status(401).json("invalid username");
        }
        const token = jwt.sign(
            {
                userId: response._id,
                email: response.email,
            },
            "abc",
            { expiresIn: "1h" }
        );

        return res.status(201).json({ message: "Login successful", 
            token: token,
            _id: response._id,
         });
        
        
    }
    catch(e){
        res.status(500).json(e.message)
    }   
}


const tokenverify = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ error: "Missing id parameter" });
        }

        console.log("ID:", id);

        const response = await user.findById(id);
        if (!response) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(response);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};



export { add, view, update, deletedata, login ,register ,viewprofile ,logins,tokenverify}