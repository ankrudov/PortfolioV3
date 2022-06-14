// Importing express module
const express=require("express");
const router=express.Router();
const Model = require('../models/about');
module.exports=router

router.get("/about",async (req,res)=>{
   try{
       const response = await Model.find();
       res.json(response)
   }
   catch(error){
       res.status(500).json({message:error.message})
   }
})

router.get('/about/:id', async (req,res)=>{
    try{
        const response = await Model.findById(req.params.id);
        res.json(response)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

router.post("/add-about", async(req,res)=>{
    const aboutData = new Model({
        title: req.body.title,
        bodyText: req.body.bodyText,
        language: req.body.language
    })
    try{
        const response = await aboutData.save();
        res.status(200).json(response)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

  
