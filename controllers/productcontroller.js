import product from "../Models/product.js";


const addimage=async (req,res)=>{
    try{
        console.log(req.file)
        let imagepath=req.file.filename
        const newProduct = new product({...req.body,image:imagepath})
        const savedProduct = await newProduct.save();
        res.json(savedProduct)
        }
        catch(e){
            res.json(e.message)
        }
}

const viewimage= async(req,res)=>{

    let response=await product.find()
    res.json(response)
    

}
export{addimage ,viewimage}