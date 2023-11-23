//import mongoose
const mongoose=require('mongoose')

//define schema-fields and values of model
// (Collection)
const adminSchema = new mongoose.Schema({
    uname:String,
    psw:String
})

//create the admin model
const admins=new mongoose.model("admins",adminSchema)

const productSchema=new mongoose.Schema({
    pname:String,
    pagea:String,
    pageb:String,
    pagec:String,
    rating:Number
})

//model
const products=new mongoose.model("products",productSchema)

//user
const userSchema = new mongoose.Schema({
    uname:String,
    email:String,
    propic:String,
    psw:String
})

const users=new mongoose.model("users",userSchema)

//export model -to import in another files
module.exports={admins,products,users}