import express from "express";
import { verifyToken } from "../utils/verifyUsers.js";
import { createListing } from "../controllers/listing.js";

const router=express.Router();


router.post('/create', createListing);
// router.delete('/delete/:id', verifyToken, deleteListing);
// router.post('/update/:id', verifyToken, updateListing);
// router.get('/get/:id', getListing);
// router.get('/get', getListings);

export default router;
