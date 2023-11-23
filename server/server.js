import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyparser.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

const port = 4444;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
