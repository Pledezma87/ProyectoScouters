import mongoose from "mongoose";


const ImageSchema = new mongoose.Schema({
    name: String,
    path: String
  });
  
  export default mongoose.model('Image', ImageSchema);