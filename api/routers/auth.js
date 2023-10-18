import express from "express"
import { add, test } from "../controllers/users.js";
import { signup,signin,google,signOut } from "../controllers/auth.js";

const router=express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post('/google', google);
router.get('/signout', signOut)

export default router