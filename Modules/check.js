const express = require("express");
const router = express.Router();
//
router.post("/check", async(req,res)=>{
    try {
        if(!req.session.currentUser) return res.status(404);

        if(!req.session.currentUser) return res.json({success:false});
        return res.json({success:true});
    } catch (error) {
        console.error(error);
    }
})
//
module.exports = router;