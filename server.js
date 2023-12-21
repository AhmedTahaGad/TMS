import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path: "./config/config.env",
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hi TMS");
});

app.listen(3001, () => {
    console.log("The app is running on 3000");
}); 