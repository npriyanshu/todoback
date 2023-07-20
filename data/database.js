import mongoose from "mongoose";

export const dbconnect = () =>{
mongoose.connect(process.env.MONGO_URI,{
    dbName:"backendapi" 
})

.then(()=>{
    console.log('database connected');
})
.catch((e)=>{
    console.log(e)
})
}