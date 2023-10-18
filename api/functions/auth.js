import Joi from "joi";

export function validateRegistereUser(obj) {
    return Joi.object({
        email: Joi.string().trim().min(5).max(100).required().email(),
        username: Joi.string().trim().min(5).max(200).required(),
        password: Joi.string().trim().min(6).required(),
    }).validate(obj);
}
export function validateSigninUser(obj) {
    return Joi.object({
        email: Joi.string().trim().min(5).max(100).required().email(),
        password: Joi.string().trim().min(6).required(),
    }).validate(obj);
}
