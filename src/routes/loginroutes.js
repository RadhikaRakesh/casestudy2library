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
  
    logdata.findOne({username:req.body.username,password:req.body.password},function(err,data){
    
      //  .then(function (logdata) {
            if(err)
            { 
                console.log(err);
                return res.send("error");
            }
            else if(!data)
            {
                res.send("Sorry, you provided worng info");
            }
            else{
               // var type=data.user;
                 Bookdata.find()
                 .then(function(books){
            
                    res.render("books",
                    {
                        nav,
                        title:"Library",
                        books,
                       // type
                    });
                });
            }
       // else{
        //res.send("Sorry, you provided worng info");
       // }
        
        });
        /*.catch(function (err) {
            res.render("login",
            { 
                message: "Sorry, you provided worng info"
            });
        })*/
        
    });

    /*



loginRouter.post("/",function(req,res){
   
    var uname=req.body.username;
    var pwd=req.body.password;
  
    //logdata.findOne({username:uname},{password:pwd},function(err,data){
    var data=logdata.find();
    var i=0;
      while(i<data.length){
    // .then(function(logdata){
            // res.send("edit");
           // var type=logdata.user;
            if(data[i].username==uname&&data[i].password==pwd){
                 res.send("success");
            }
            else{i++;
           /* var books= Bookdata.find()
             res.render("books",{
                 nav,
                 title:"Library",
                 type:"admin",
                 books
                 
             });
            // res.send("error");
            }
        }
        res.send("error");   
        
        //res.redirect("books");
    //res.render("","Please enter both id and password");
   // });
    
});*/

return loginRouter;

}
module.exports=logindetails;