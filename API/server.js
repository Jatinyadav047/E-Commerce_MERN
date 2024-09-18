import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'express'
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'

const app = express();
app.use(bodyParser.json())

// home testing route
app.get('/',(req,res)=>res.json({messge:'This is home route'}))
// user Router
app.use('/api/user',userRouter)
// product Router
app.use('/api/product',productRouter)

mongoose.connect(
    "mongodb+srv://jatinyadav9710:Rxn10aNCbGPtXA2l@cluster0.mlerpvm.mongodb.net/",{
      dbName:"MERN_E-Commerce"
    }
  ).then(()=>console.log("MongoDB Connected Succssfully...!")).catch((err)=>console.log(err));

const port = 1000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))