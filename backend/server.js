import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();
const PORT = 5001;

dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes); 
app.use("/api/messages", messageRoutes); 
app.use("/api/users", userRoutes); 


app.get("/",(req,res)=>{
    //root route htpp://localhost:5001/
  res.send("Helooo") 
})

app.listen(PORT,()=> {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)

});

