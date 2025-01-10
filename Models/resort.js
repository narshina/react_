import mongoose from "mongoose";

let resortschema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
    })

const resort=mongoose.model("resort",resortschema)
export default resort