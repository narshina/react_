import mongoose from "mongoose";

let productschema=new mongoose.Schema({
  image:{
    type:String,
    required:true
  },
  quantity:{
    type:String,
    required:true
  }
})

const product=mongoose.model("product",productschema)
export default product