import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/server/auth", authRoutes);
app.use("/server/users", userRoutes);
app.use("/server/posts", postRoutes);

const port = 4444;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
