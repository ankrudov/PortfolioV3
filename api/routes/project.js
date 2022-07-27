const multer = require('multer');
const storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,callback)=>{
        callback(null,file.originalname)
    }
})
const upload = multer({
    storage:storage
}).single('image');

const express=require("express");
const router=express.Router();
const Model = require('../models/projects');
module.exports=router

router.get("/projects",async (req,res)=>{
    try{
        const response = await Model.find();
        res.json(response)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

router.post("/upload-project",async(req,res)=>{
    try{
        upload(req,res,(err)=>{
            if(err){
                console.log(err)
            }else{
                const projectData = new Model({
                    featured:req.body.featured,
                    title:req.body.title,
                    description:req.body.description,
                    tools:req.body.tools,
                    gitHubLink:req.body.gitHubLink,
                    demoLink:req.body.demoLink,
                    alignment:req.body.alignment,
                    image:{
                        data:req.file.filename,
                        contentType:'image.png'
                    }
                })
                projectData.save()
                .then(()=>res.send('successfully uploaded'))
                .catch((error)=>res.send(error.message))
            }
        })
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})