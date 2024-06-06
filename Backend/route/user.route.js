import express from "express"
import { login, signup } from "../controller/user.controller.js";

const router=express.Router();

//pass the function we defined earlier
router.post("/signup",signup)

//pass the login funciton we defined earlier
router.post("/login",login)



//ab go to index for using this


export default router;