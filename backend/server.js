import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import ProductRoutes from "./router/productRoute.js";
import AuthRoutes from "./router/authRoute.js";
import UserRoutes from "./router/userRoute.js";
import { fileURLToPath } from "url";
import path from "path";
import multer from "multer";
import OrderRoutes from "./router/orderRoute.js";

const app = express();
dotenv.config();

//Important
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Upload image
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(
  "./assets/uploads",
  express.static(path.join(__dirname, "../frontend/public/assets/uploads/"))
);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../frontend/public/assets/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("Image uploaded successfully!");
  } catch (error) {
    res.status(500).json("Error. Image not uploaded!");
  }
});

//Router
// app.get('/', async (req, res) => {
//     res.send('Backend Server is ready!')
// });

app.use("/api/product", ProductRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/order", OrderRoutes);

//Connect with DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => {
    console.log(error.message);
  });

//Create Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at: http://localhost:${port}`);
});
