const jwt=require("jsonwebtoken")
const authMiddeleware=async(req,res ,next )=>{
    try {
        const authHeaders=req.headers.authorization
        if (!authHeaders||!authHeaders.startsWith("Bearer ")) {
            return res.status(404).json({
                message:"invalid token"
            })
        }
        const token=authHeaders.split(" ")[1]
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded.user_id;
        next()
        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

module.exports=authMiddeleware