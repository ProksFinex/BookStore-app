import mongoose from "mongoose";

//defining schema
const bookSchema= mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})

//createing model
const Book=mongoose.model("Book",bookSchema); //mongoDB khud se s add kr deta hai in server

export default Book;