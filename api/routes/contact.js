require('dotenv').config()
const express=require("express");
const router=express.Router();
const nodemailer = require("nodemailer");
module.exports=router

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
});
transporter.verify((error) => {
    if (error) {
      console.log(`this is the error:${error}`);
    } else {
      console.log("Ready to Send Emails");
    }
  });

router.post('/contact',(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 

    const mail = {
        from: name,
        to: process.env.EMAIL_USERNAME,
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`,
    };

    transporter.sendMail(mail,(error)=>{
        if (error) {
            res.json({ status: `ERROR: ${error.message}` });
        } else {
            res.json({ status: "Message Sent" });
        }
    })
})