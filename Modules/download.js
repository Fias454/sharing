const express = require("express");
const router = express.Router();
const path = require("path")
const fs = require("fs")

//
router.post("/single", async(req,res)=>{
    try{
        if(!req.session.currentUser) return res.status(404);

        const {item} = req.body;

        const fullPath = path.join(__dirname, "../uploads", item);
        if(!fs.existsSync(fullPath))return res.json({success:false});
        return res.download(fullPath);
        
    }catch(err){
        console.error(err)
    }
})
//
module.exports = router;