import express from "express";
import { connectDB } from "./config/db.js";
import UserRouter from "./routers/users.js";
import authRouter from "./routers/auth.js";
import dotenv from "dotenv";
import path from 'path';

import { errosMainHandlder, notFound } from "./utils/error.js";

const __dirname = path.resolve();

const app=express()

dotenv.config()

connectDB()

app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/user",UserRouter);

app.use('*', notFound)

app.use(errosMainHandlder);

const PORT=process.env.PORT||8989;

app.listen(PORT,()=>{ 
    console.log(`listen on ${PORT}`);
})