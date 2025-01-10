import express from "express";
import { addimage,  viewimage } from "../controllers/productcontroller.js";
import { upload } from "../multer.js";

const productRouter = express.Router();

productRouter.post("/addproduct", upload.single("image"), addimage);
productRouter.get("/vimage",viewimage)

export default productRouter;
