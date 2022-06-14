const express = require('express');
const { model } = require('mongoose');
const Model = require('../models/model');
const router = express.Router();
module.exports = router;

//routes 

//Post Method
router.post('/add-project',async (req, res) => {
    const projectData = new Model({
        title: req.body.title,
        description: req.body.description,
        bodyText: req.body.bodyText,
        url: req.body.url
    })
    try{
        const response = await projectData.save();
        res.status(200).json(response)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/projects', async (req, res) => {
    try{
        const response = await Model.find();
        res.json(response)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/project/:id', async (req, res) => {
    try {
        const response = await Model.findById(req.params.id);
        res.json(response)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update-project/:id', async (req, res) => {
    try{   
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new: true};

        const response = await Model.findByIdAndUpdate(id,updatedData,options);
        res.send(response);

    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Delete by ID Method
router.delete('/delete-project/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})
