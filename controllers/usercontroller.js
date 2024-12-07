import { response } from "express"
import user from "../Models/user.js"

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


export { add, view, update, deletedata, login }