import express from "express";
import { config } from "dotenv";
import Cors from "cors";
import cookieParser from "cookie-parser";
import ProductRouter from "./routes/ProductRoutes.js"

config({path:"./config/config.env"})

export const app = express()
app.use(Cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use("/api",ProductRouter)

