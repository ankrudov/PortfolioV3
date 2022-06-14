// Importing express module
const express=require("express");
const router=express.Router();
const Model = require('../models/about');
module.exports=router

//get all
router.get("/about",async (req,res)=>{
   try{
       const response = await Model.find();
       res.json(response)
   }
   catch(error){
       res.status(500).json({message:error.message})
   }
})

//get by id
router.get('/about/:id', async (req,res)=>{
    try{
        const response = await Model.findById(req.params.id);
        res.json(response)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

//post method
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

//update method
router.patch('/update-about', async (req,res)=>{
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new:true};

        const response = await Model.findByIdAndUpdate(id,updatedData,options);
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})

//delete
router.delete('/delete-about', async (req,res)=>{
    try{
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

  
