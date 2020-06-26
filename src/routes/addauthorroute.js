const express=require("express");
const addauthor=express.Router();
//const bodyparser=require("body-parser");
//var urlencodedParser = bodyparser.urlencoded({ extended: false });
function adddetails(nav)
{
    addauthor.get("/",function(req,res){

        res.send("hai hello");
      /*  res.render("addauthor",
        {
             nav,
             title:"Library",
             
        });*/
    });
    addauthor.post("/",function(req,res){


    });
    return addauthor;
}
module.exports=adddetails;
