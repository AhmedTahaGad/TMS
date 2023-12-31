import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import notes from "./routes/notes.js"
import { connectDB } from "./config/db.js";

dotenv.config({
    path: "./config/config.env",
});

const app = express();

app.use(express.json());
app.use(morgan("dev")); 

app.use("/api/v1/notes", notes);



app.listen(3000, () => {
    try{
        connectDB();
        console.log("The app is running on 3000");
        console.log("MongoDB connected")
    } catch (error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
    
}); 