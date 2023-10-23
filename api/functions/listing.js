import Joi from "joi";

export function validListingCreation(obi){
    return Joi.object({
        name: Joi.string().trim().required().min(10).max(62),
        description: Joi.string().trim().required().min(5),
        address: Joi.string().trim().required().min(5).max(100),
        regularPrice: Joi.number().required().min(50).max(10000000),
        discountPrice: Joi.number().required(),
        bathrooms: Joi.number().required().min(1).max(10),
        bedrooms: Joi.number().required().min(1).max(10),
        furnished: Joi.boolean().required(),
        parking: Joi.boolean().required(),
        type: Joi.string().trim().required(),
        offer: Joi.boolean().required(),
        imageUrls: Joi.array().required(),
        userRef: Joi.string().trim().required().min(5).max(100), 
    }).validate(obi);
}