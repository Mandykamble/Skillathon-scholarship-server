const express = require("express");
const router1 = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUser, postUser } = require("../controller/organisation")
const User=require("../model/organisation");
const validateRegisterInput=require("../validation/register");
 const validateLoginInput=require("../validation/login");
const keys =require("../config/keys");
router1.get('/',getUser);
// router1.post('/login',postLogin);

// router1.post('/login',postLogin);

router1.post('/',postUser);

// router1.post("/login", (req, res) => {
//     // Form validation
//     const { errors, isValid } = validateLoginInput(req.body);
//     // Check validation
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }
//     const email = req.body.email;
//     const password = req.body.usernamepassword;
//     // Find user by email
//     User.findOne({ email }).then(user => {
//         // Check if user exists
//         if (!user) {
//             return res.status(404).json({ emailnotfound: "Email not found" });
//         }
//         // Check password
//         bcrypt.compare(password, user.usernamepassword).then(isMatch => {
//             if (isMatch) {
//                 // User matched
//                 // Create JWT Payload
//                 const payload = {
//                     id: user.id,
//                     name: user.name
//                 };
//                 // Sign token
//                 jwt.sign(
//                     payload,
//                     keys.secretOrKey,
//                     {
//                         expiresIn: 31556926 // 1 year in seconds
//                     },
//                     (err, token) => {
//                         res.json({
//                             success: true,
//                             token: "Bearer " + token
//                         });
//                     }
//                 );
//             } else {
//                 return res
//                 .status(400)
//                 .json({ passwordincorrect: " Password incorrect" });
//             }
//         });
//     });
// });



router1.post("/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
        return res.status(400).json({ email: "Email already exists" });
        } else {
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            usernamepassword: req.body.usernamepassword,
            orgName: req.body.orgName,
            orgType: req.body.orgType,
            // skills: req.body.skills
        });
        
        // Hash password before saving in database
    
        bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.usernamepassword, salt, (err, hash) => {
            if (err) throw err;
            newUser.usernamepassword = hash;
            newUser
                .save()
                .then(user => {
                    res.status(200).json(user);
                })
                .catch(err => {
                    res.status(400).send(err);
                });
            });
        });
        }
    });
});


router1.post("/login", (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.usernamepassword;
    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password
            if (password===user.usernamepassword) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                };
                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrkey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                .status(400)
                .json({ passwordincorrect: " Password incorrect" });
            }
        
    });
});


//
module.exports = router1;  
