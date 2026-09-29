const user=require("../models/userSchema")
const bcrypt=require("bcryptjs")
const jwt =require("jsonwebtoken")
const userRegister=async(req,res)=>{
    try {
        const {email,password,name}=req.body
        const existingUser= await user.findOne({email})
        if (existingUser) {
            return res.status(400).json({
                message:"user   already exists"
            })
        }

        const hash=await bcrypt.hash(password,10)

        const User= await user.create({
            name,
            email,
            password:hash
    })

    return res.status(201).json({
        
          user: {
                id: User._id,
                name: User.name,
                email: User.email
            },
        message:"user created sucssesfully"
    })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


const userLogin=async(req,res)=>{
    try {
        const {email,password,name}=req.body
        const existingUser= await user.findOne({email})
        if (!existingUser) {
            return res.status(400).json({
                message:"user does not exists"
            })
        }
        
        const isMatch=await bcrypt.compare(password,existingUser.password)
        if (!isMatch) {
          return   res.status(400).json({
                message:"password did not  matched"
            })
        }

        const token= await jwt.sign(
            {user_id:existingUser._id},
            process.env.SECRET_KEY,
            {expiresIn:"4d"}
        )

        return res.status(200).json({
    message: "login successful",
    token
});
      
       
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


module.exports={
    userLogin,
    userRegister
}