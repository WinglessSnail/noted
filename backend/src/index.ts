import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import todoRoutes from "./routes/todoRoutes";

dotenv.config();
connectDB()

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => { res.send("api running...") })

app.use("/todo", todoRoutes);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
