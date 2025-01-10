import product from "../Models/product.js";
import Video from "../Models/video.js";


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

const addVideo = async (req, res) => {
  try {
      const { title, description } = req.body;
      const videoPath = req.file.path;
      const newVideo = new Video({ title, description, videoPath });
      await newVideo.save();
      res.status(201).json(newVideo);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

const getVideos = async (req, res) => {
  try {
      const videos = await Video.find();
      res.json(videos);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};


export{addimage ,viewimage ,addVideo ,getVideos}