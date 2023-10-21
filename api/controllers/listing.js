import { validListingCreation } from "../functions/listing.js";
import { errorHandler } from "../utils/error.js";
import Listing from "../models/listing.js"


export const createListing=async(req,res,next)=>{
    const {error}=validListingCreation(req.body);
    if (error)return next(errorHandler(404,error.details[0].message))
    
    const listing=await Listing.create(req.body);
    try {
        return res.status(200).json({
            status:200,
            message:"Listing Added",
            data:listing
        })
    } catch (error) {
        return next(errorHandler(401, error));
    }
    res.json({
        message: req.body
    });
}