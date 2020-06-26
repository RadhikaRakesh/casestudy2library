const express=require("express");


const signRouter=express.Router();
const logdata=require("../model/logdata");

var Users=[];
function signupdetails(nav)
{

signRouter.get("/", function(req,res)
{

    res.render("signup",
    {
        nav,
        title:"Library"
    });

});

signRouter.post("/",function(req,res){

   // console.log(req.body);
   // res.send("hai hello");

    
        var newuser = {
            fname:req.body.fname,
            address:req.body.address,
            gender:req.body.Radios,
            dob:req.body.dob,
            mobile:req.body.mno,
            username:req.body.username,
            email: req.body.email,
             password: req.body.password,
             user:req.body.Radios1
            };
            var log=logdata(newuser);
            log.save();
            
    
        res.redirect("login");
       // res.send( " Successfully signed up");
      //}
     
});

return signRouter;
}
module.exports=signupdetails;