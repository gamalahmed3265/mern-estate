import Joi from "joi";

export function validListingCreation(obi){
    return Joi.object({
        name: Joi.string().trim().required().min(5).max(100),
        description: Joi.string().trim().required().min(5).max(100),
        address: Joi.string().trim().required().min(5).max(100),
        regularPrice: Joi.number().trim().required().min(5).max(100),
        discountPrice: Joi.number().trim().required().min(5).max(100),
        bathrooms: Joi.number().trim().required().min(5).max(100),
        bedrooms: Joi.number().trim().required().min(5).max(100),
        furnished: Joi.boolean().trim().required().min(5).max(100),
        parking: Joi.boolean().trim().required().min(5).max(100),
        type: Joi.string().trim().required().min(5).max(100),
        offer: Joi.boolean().trim().required().min(5).max(100),
        imageUrls: Joi.array().trim().required().min(5).max(100),
        userRef: Joi.string().trim().required().min(5).max(100),    
    }).validate(obi);
}