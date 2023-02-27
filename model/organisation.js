const mongoose = require("mongoose");
const { type } = require("os");

const orgSchema = new mongoose.Schema({
    orgId:{
        type:Number,
    },
    userName:{
        type:String,
        required :[true,"Please provide your name"]  
    },
    email:{
        type:String,
        required :[true,"Please provide your name"]  
    },
    usernamepassword:{
        type:String,
        required :[true,"Please provide your name"]  
    },
    orgName:{
        type:String,
        required :[true,"Please provide your name"]  
    },
    orgType:{
        type:String,
        required :[true,"Please provide your scheamname"]  
    },
    ScheamAmmount:{
        type:Number,
        // required :[true,"Please provide your ScheamAmmount"] 
    },
    scheamType:{
        type:String,
        // required :[true,"Please provide your scheamType"]  
    },
    ScheamFor:{
        type:String,
        // required :[true,"Please provide your ScheamFor"] 
    },
    
    

    
        


});
const OrgSchema = mongoose.model("organisation",orgSchema); 
module.exports = OrgSchema