import express from 'express'
import mongoose from 'mongoose'
const app = express()
mongoose.connect(
    "mongodb+srv://jatinyadav9710:Rxn10aNCbGPtXA2l@cluster0.mlerpvm.mongodb.net/",{
        dbName : "MERN_E_Commerce"
    }
).then(()=> console.log("Mongo Connected sucsessfully")).catch((err)=> console.log(err));
const port = 1000;
app.listen(port,()=>console.log(`server is running on port ${port}`))