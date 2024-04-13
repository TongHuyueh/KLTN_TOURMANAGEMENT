import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        userId: {
            type: String,                     
        },
        userEmail:{
            type: String,            
        },
        tourName: {
            type: String,                
        },
        fullName:{
            type: String,
            required: true,
        },
        guestSize:{
            type: Number,
            required: true,
        },
        phone:{
            type: String,
            required: true
        },
        bookAt:{
            type: Date,
            required: true
        },
        totalPrice:{
            type: Number,            
        }
        
    },
    {timestamps: true}
)
export default mongoose.model("Booking", bookingSchema);