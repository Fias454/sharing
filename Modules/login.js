const express = require("express");
const router = express.Router();
//
router.post("/login", async(req,res)=>{
    try{
        const {name, password} = req.body;
        if(!name || !password) return res.status(202).json({message:"Invaild param entry"});
        if(name === "fias454" && password ==="control-25725839-srvr"){
            req.session.currentUser = true;
            return res.status(200).json({success:true});
        }else{
            return res.json({success:false})
        }
    }catch(err){
        console.error(err);
    }
})
//
module.exports = router;