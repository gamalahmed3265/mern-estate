import { validListingCreation } from "../functions/listing.js";
import { errorHandler } from "../utils/error.js";
import Listing from "../models/listing.js"


export const createListing=async(req,res,next)=>{
    const {error}=validListingCreation(req.body.data);
    if (error)return next(errorHandler(404,error.details[0].message))
    
    const listing=await Listing.create(req.body.data);
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
export const deleteListing=async(req,res,next)=>{
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        return next(errorHandler(404, 'Listing not found!'));
    }
    if (req.user.id !== listing.userRef) {
        return next(errorHandler(401, 'You can only delete your own listings!'));
    }
    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message:'Listing has been deleted!'
        });
    } catch (error) {
        next(error);
    }
}
export const updateListing=async(req,res,next)=>{
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        return next(errorHandler(404, 'Listing not found!'));
    }
    if (req.user.id !== listing.userRef) {
        return next(errorHandler(401, 'You can only delete your own listings!'));
    }
    try {
        const listingUpdate=await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
            );
        res.status(200).json({
            status:200,
            message:'Listing has been Update!',
            listing:listingUpdate
        });
    } catch (error) {
        next(error);
    }
}
export const getListing=async(req,res,next)=>{

    try{
        const listing= await Listing.findById(req.params.id);
        
        if (!listing) {
            return next(errorHandler(404,"Not Found"))
        }
        return res.status(200).json({
            message:"Listing",
            status:200,
            listing:listing
        })
    } catch (error) {
        console.log(error);
        return next(errorHandler(400,error))
    }
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
