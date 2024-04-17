import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    departure:{
      type: String,     
    },
    city:{
      type: String,    
    },
    day: {
      type: Number,   
    },    
    night:{
      type: Number,      
    },       
    photo: {
      type: String,     
    },
    desc: {
      type: String,
     
    },
    price: {
      type: Number,      
    },
    maxGroupSize: {
      type: Number,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);
