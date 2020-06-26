const express=require("express");
//const bodyparser=require("body-parser");
//const flash=require("connect-flash");

const loginRouter=express.Router();
const logdata=require("../model/logdata");
const Bookdata=require("../model/bookdata");
//loginRouter.use(flash());
//loginRouter.use(express.row());
//var urlencodedParser = bodyparser.urlencoded({ extended: false });

function logindetails(nav)
{


loginRouter.get("/", function(req,res)
{

    res.render("login",
    {
        nav,
        title:"Library",
        
        
    });
});
loginRouter.post("/",function(req,res){
   
    var uname=req.body.username;
    var pwd=req.body.password;
  
    logdata.findOne({username:req.body.username,password:req.body.password})
    
        .then(function (logdata) {
            if(logdata.username===uname&&logdata.password===pwd)
            {
                 Bookdata.find()
                 .then(function(books){
            
                    res.render("books",
                    {
                        nav,
                        title:"Library",
                        books
                    });
                });
            }
        else{
        res.send("Sorry, you provided worng info");
        }
        
        });
        /*.catch(function (err) {
            res.render("login",
            { 
                message: "Sorry, you provided worng info"
            });
        })*/
        
    });

/*loginRouter.post("/",function(req,res){
   
    var uname=req.body.username;
    var pwd=req.body.password;
  
    logdata.findOne({username:uname,password:pwd})
        .then(function(logdata){
            // res.send("edit");
            var type=logdata.user;
            
            var books= Bookdata.find()
             res.render("books",{
                 nav,
                 title:"Library",
                 type:"admin",
                 books
                 
             });
          
              
        
        //res.redirect("books");
    //res.render("","Please enter both id and password");
    });
    
});*/

return loginRouter;

}
module.exports=logindetails;