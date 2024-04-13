import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
dotenv.config()

const app = express()
const port = process.env.PORT
const corsOptions ={
    origin: 'http://localhost:3000',
    credentials: true,   
}

app.use(express);
app.use(cors(corsOptions));
app.use(cookieParser());

app.get("/", (req, res ) =>{
    res.send("API is working")
})

const connect = async  () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,)
        console.log("Connected to MongoDB")
    } catch (err){
        console.log("Error connecting to MongoDB:");
    }
}

app.listen(port, () => {
    console.log("Server listening on port", port)
    // connect();
})
