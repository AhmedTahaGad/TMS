import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config({
    path: "./config/config.env",
});

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send("Hi TMS");
});

app.listen(3001, () => {
    console.log("The app is running on 3000");
}); 