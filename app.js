import express from 'express';
import {config} from 'dotenv'
import userRouter from './routes/users.js';
import taskRouter from "./routes/task.js"
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/error.js';
import cors from 'cors'
export const app = express();

config({
    path:"./data/config.env"
})
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))

app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks",taskRouter);

// using error middleware
app.use(errorMiddleware)