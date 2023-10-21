import { validListingCreation } from "../functions/listing.js";
import { errorHandler } from "../utils/error.js";

export const createListing=(req,res,next)=>{
    const {error}=validListingCreation(req.body);
    if (error)return next(errorHandler(404,error.details[0].message))
    
    res.json({
        message:"dsfdsf"
    });
}