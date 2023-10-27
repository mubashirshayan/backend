import  express  from "express";
import mongoose from "./database/index.js";
import router from "./routes/index.js";
import cors from "cors";
import User from "./models/user.js";

const app=express();
app.use(express.json());
app.use(cors({
  origin:"*",
  credentials:true,
}));
const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));
db.once("open",()=>{
    console.log("dbconnected")
})
app.use("/api",router
  )




app.listen(8000,()=>{
    console.log("sever is running on port",8000)
})