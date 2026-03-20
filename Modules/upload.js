const express = require("express");
const multer = require("multer");
const router = express.Router();
//
const multerSave = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "./uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    }
})
const save = multer({storage:multerSave});
//
router.post("/single", save.single("file") ,async(req,res)=>{
    try{
        if(!req.session.currentUser) return res.status(404);

        const file = req.file;
        if(!file) return res.status(404).json({message:"No file reseived"});
        console.log("|================================================================");
        console.log(`|               File original name:${file.originalname}          `);
        console.log(`|               File name:${file.filename}                       `);
        console.log(`|               File encoding:${file.encoding}                   `);
        console.log(`|               File size:${file.size}                           `);
        console.log("|================================================================");
        return res.status(200).json({success:true});
    }catch(err){
        console.error(err);
    }
})
//
module.exports = router;