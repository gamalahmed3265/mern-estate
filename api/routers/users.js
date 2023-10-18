import express from "express"
import { add, test } from "../controllers/users.js";

const router=express.Router();

router.get("/",test)
router.post("/add",add)


export default router