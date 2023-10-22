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
}
export const deleteListing=(req,res,next)=>{
    console.log();
}

export const getListings=async(req,res,next)=>{
    const limit=parseInt(req.query.limit) || 9;
    const startIndex=parseInt(req.query.startIndex) || 0;
    let offer=req.query.offer
    try {
        if (offer === undefined || offer === 'false') {
            offer = { $in: [false, true] };
        }
        
        let furnished = req.query.furnished;
        
        if (furnished === undefined || furnished === 'false') {
            furnished = { $in: [false, true] };
        }
        
        let parking = req.query.parking;
        
        if (parking === undefined || parking === 'false') {
            parking = { $in: [false, true] };
        }
        
        let type = req.query.type;
        
        if (type === undefined || type === 'all') {
            type = { $in: ['sale', 'rent'] };
        }
        
        const searchTerm = req.query.searchTerm || '';
        
        const sort = req.query.sort || 'createdAt';
        
        const order = req.query.order || 'desc';
        
        const listings = await Listing.find({
            name: { $regex: searchTerm, $options: 'i' },
            offer,
            furnished,
            parking,
            type,
        }).sort({ [sort]: order })
            .limit(limit)
            .skip(startIndex);
        // delete this
        const listings2= await Listing.find();
        return res.json({
            message:"Listing",
            status:200,
            listings:listings2
        })
    } catch (error) {
        console.log(error);
        return next(errorHandler(400,error))
    }
}
