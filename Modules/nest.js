const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();
//
router.get("/nest", async(req,res)=>{
    try{
        const content = fs.readdirSync(path.join(__dirname, "../uploads"));
        if(!content) return res.status(404).json({success:false});
        return res.status(200).json({success:true, content:content});
    }catch(err){
        console.error(err);
    }
})
//
module.exports = router;