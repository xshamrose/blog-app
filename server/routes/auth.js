import express from "express";
import { login, logout, register } from "../controllers/auth.js";

const router = express.Router();

router.get("/register", register);
router.post("/login", login);
router.post("/logout", logout);
export default router;
