const router = require("express").Router();
const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

router.post("/", async (req, res) => {
    try{
    const {email, password, passwordVerify} = req.body

    //Validation

        if(!email || !password || !passwordVerify)
        return res.status(400).json({errorMessage: "Please enter all required fields."})

        if (password !== passwordVerify)
        return res.status(400).json({errorMessage: "Please enter the same password twice"})

        const existingUser = await User.findOne({email: email});
        if (existingUser)
            return res.status(400).json ({
                errorMessage: "Account with this email already exists"
            })

    //Hashing password

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)
    console.log(passwordHash)

    //save a new user
    const newUser = new User ({ 
        email, passwordHash
    })
    const savedUser = await newUser.save();

    // sign the token
    const token = jwt.sign({
        user: savedUser._id
    }, process.env.JWT_SECRET
    );

    //send the token in a cookie
    res.cookie("token", token, {
        httpOnly: true,
    });

    } catch (err) {
        console.error(err)
        res.status(500).send()
    }
});


module.exports = router;