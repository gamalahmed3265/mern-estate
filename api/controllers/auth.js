import bcryptjs from 'bcryptjs';
import User from "../models/user.js";
import { validateRegistereUser, validateSigninUser } from '../functions/auth.js';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup=async (req,res,next)=>{
    const { error } = validateRegistereUser(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message })
    }
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const user=new User({email,username,password:hashedPassword});
    try {
        await user.save();
        return res.status(201).json({
            message:'User created successfully!'
        });
    } catch (error) {
        return next(error);
    }
}
export const signin=async(req,res,next)=>{
    const dataRequest=req.body;
    const {error} =validateSigninUser(dataRequest);

    if (error)return next(errorHandler(404, error.details[0].message));
    
    try {
        // valid User
        const validUser = await User.findOne({email:dataRequest.email} );
        if (!validUser) return next(errorHandler(404, 'User not found!'));
        
        console.log("pass: ", dataRequest.password);
        // valid password
        const validPassword = bcryptjs.compareSync(dataRequest.password, validUser.password);

        if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
        const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        const {password,...rest}=validUser._doc;
        res
        .cookie("access_token",token,{
            httpOnly:true
        })
        .status(200)
        .json({
            message:"User Signin",
            user:rest
        });
    } catch (error) {
        next(error);
    }
}
export const google=(req,res,next)=>{
    console.log(req.body);
    const email=req.body.email;
    console.log("email ",email);

    res.json({
        email:"email"
    });
}
export const signOut=(req,res,next)=>{
    console.log(req.body);
    const email=req.body.email;
    console.log("email ",email);

    res.json({
        email:"email"
    });
}