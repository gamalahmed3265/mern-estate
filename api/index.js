import express from "express";
import { connectDB } from "./config/db.js";
import userRouter from "./routers/users.js";
import authRouter from "./routers/auth.js";
import listingRouter from "./routers/listing.js";
import dotenv from "dotenv";
import path from 'path';
import cors from "cors";
import cookieParser from 'cookie-parser';
import { errosMainHandlder, notFound } from "./utils/error.js";

const __dirname = path.resolve();

const app=express()

dotenv.config()

connectDB()

app.use(express.json());
app.use(cors())
app.use(cookieParser());

app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.use("/api/listing",listingRouter);

app.use('*', notFound)

app.use(errosMainHandlder);

const PORT=process.env.PORT||8989;

app.listen(PORT,()=>{ 
    console.log(`listen on ${PORT}`);
})