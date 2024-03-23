import express from "express";
import { Login, Logout, Register, bookmark, getMyProfile } from "../controllers/userController.js";
import isAuthenticated from "../config/auth.js";


const router = express.Router();
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/bookmark/:id").put(isAuthenticated,bookmark);
router.route("/profile/:id").get(isAuthenticated,getMyProfile);


export default router;