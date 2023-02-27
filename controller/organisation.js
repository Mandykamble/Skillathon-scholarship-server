
const jwt = require("jsonwebtoken");
const tryCatch = require("../utils/tryCatch");
const AppError = require("../utils/AppError");
const Organisation= require("../model/organisation.js");
const keys =require("../config/keys");
const cookieParser = require("cookie-parser");
// Body-parser middleware


exports.postUser = async(req,res,next)=>{
    // console.log(req.body)

    try {
        let num=0;
        const newUser= new Organisation(req.body);
        newUser.orgId = num;
        num = num+1;
        // const user = jwt.verify(req.cookies.access_token,process.env.ACCESS_TOKEN);   
        // if(
            //     !newScholarship.scheamname ||
    //     !newScholarship.scheamnameDesc ||
    //     !newScholarship.scheamType ||
    //     !newScholarship.FinancialYear ||
    //     !newScholarship.ScheamFor ||
    //     !newScholarship.ScheamAmmount ||
    //     !newScholarship.startDate || 
    //     !newScholarship.endDate
    // ){
        
        //     throw new AppError(300,"input field not provided",404)

        // }
        
        // console.log(newEmployer);
        await newUser.save();
        
        res.status(200).json(newUser)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
        

    
  
   
    

    // res.render("employerprofile")
    // res.redirect('/employerprofile')
}

// exports.postLogin = tryCatch(async(req,res,next)=>{
    
//     const {email,usernamepassword} = req.body;
//     if(!email || !usernamepassword)
//     {
//         throw AppError(300,"Invalid email or password",404);
//     }
//     const newUser = await Organisation.find({email,usernamepassword});
//      console.log(newUser)
//     if(!newUser)
//     {
//         throw AppError(300,"User Not Found",404);
//     }

//     const accesssToken = jwt.sign({newUser},process.env.ACCESS_TOKEN);
//     res.cookie("access_token",accesssToken).redirect("/")
//     console.log("login succsessfull");
//     res.rende
//     // res.cookie("access_token",accesssToken).status(201).json({
   


    
// });

exports.getUser = async(req,res,next)=>{
    

    // const employeer = jwt.verify(req.cookies.access_token,process.env.ACCESS_TOKEN)
    // const data1 = employeer.newUser[0].name;
    try {
        
        const users = await Organisation.find(); 
        // res.render("employerpost")
        
        res.status(200).json(users)
    } catch (error) {
        
        res.status(500).json(error)
    }
}


















