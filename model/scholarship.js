const mongoose = require("mongoose");
const { type } = require("os");

const scholershipSchema = new mongoose.Schema({
    Scholershipid:{
        type:Number,
    },
    DepartmentName:{
        type:String,
        // required :[true,"Please provide your name"]  
        
    },
    scheamname:{
        type:String,
        // required :[true,"Please provide your name"]  
    },
    scheamnameDesc:{
        type:String,
        // required :[true,"Please provide your scheamname"]  
    },
    ScheamAmmount:{
        type:Number,
        // required :[true,"Please provide your ScheamAmmount"] 
    },
    RequiredDocuments:{
        type:[String],
    },
    
    EligibilityCriteria:{
        gender:{
            type:String
          },
        familyincome:{
            type:Number
        },
        cast:{
            type:String
        }
        
    },
    applicationlink:{
        type:String,  
    },
    startdate:{
        type:String,  
    },
    enddate:{
        type:String,  
    },
    Contact:{
        type:String,  
    },
    Name:{
        type:String,  
    },
    Phone:{
        type:Number,  
    },
    Email:{
        type:String,  
    },
    Address:{
        type:String,  
    },
    

    
        


});
const ScholershipScheam = mongoose.model("scholership",scholershipSchema); 
module.exports = ScholershipScheam