import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDb from './config/db.js'
import userRoutes from "./routes/userRoutes.js";

dotenv.config()

connectDb()

const app = express()

app.use(express.json());
app.use(cors())


app.use("/api/user", userRoutes);


app.listen(process.env.PORT || 8000,()=>{
    console.log("Running on " + process.env.PORT);
})