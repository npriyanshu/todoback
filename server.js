import { app } from "./app.js";
import { dbconnect } from './data/database.js';
dbconnect();
app.listen(process.env.PORT,()=>{
    console.log(`server is working at port ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})