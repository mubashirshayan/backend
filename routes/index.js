import express from 'express';
import user from "./user.js"
import cors from "cors";
const app=express();
app.use(cors())
const router = express.Router() 
router.use("/user",user)


export default router;