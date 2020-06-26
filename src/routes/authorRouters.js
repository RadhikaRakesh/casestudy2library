const express=require("express");
const authorRouter=express.Router();
const authordata=require("../model/authordata");
//const bodyparser=require("body-parser");
//var urlencodedParser = bodyparser.urlencoded({ extended: false });
function authordetails(nav)
{

   /*var authors=[
        {
            name:"Chetan Bhagat",
            language:"English",
            genere:"Novels",
            img:"chethan.jpg",
            works:"Five Point Someone (2004), One Night @ the Call Center (2005), The 3 Mistakes Of My Life (2008) , 2 States (2009), Revolution 2020 (2011) and Half Girlfriend (2014), One Indian Girl (2016)."
        },
        {
            
            name:"J K Rowling",
            language:"English",
            genere:"Fantacy",
            img:"rowling.jpg",
            works:"Harry Potter series  Harry Potter and the Philosopher's Stone ,Harry Potter and the Chamber of Secrets ,Harry Potter and the Prisoner of Azkaban ,Harry Potter and the Goblet of Fire Harry Potter and the Order of the Phoenix, Harry Potter and the Half-Blood Prince Harry Potter and the Deathly Hallows "
        },
        {
            
            name:"Basheer",
            language:"Malayalam",
            genere:"novels",
            img:"basheer.jpg",
            works:"Balyakalasakhi,Manthrikappoocha,Maranathinte Nizhalil, Mathilukal,Mucheettukalikkarante Makal,Ntuppuppakkoranendarnnu ,Pathummayude Aadu ,Premalekhanam ,Shabdangal"
        }
    ]*/
    authorRouter.get("/",function(req,res){

       /* res.render("authors",
        {
             nav,
             title:"Library",
             authors
        });*/
        authordata.find()
        .then(function(authors){
            res.render("authors",{
            nav,
            title:"Library",
            authors
        })
        });
    });

    authorRouter.get("/editauthor/:id",function(req,res){
   
        const id= req.params.id;
           authordata.findOne({_id:id})
           .then(function(author){
              // res.send("edit");
               res.render("editauthor",{
                   nav,
                   title:"Library",
                   author 
               });
              
             
           });
        });
          authorRouter.post("/editauthor/:id",function(req,res){
            const id= req.params.id; 
           authordata.findOne({_id:id})
            .then(function(author){
               
               authordata.findOneAndUpdate({_id:id},req.body,function(req,res1){
                    res.redirect("/authors");  
               });
                })
           
            
            });
    authorRouter.get("/deleteauthor/:id",function(req,res){

        const id= req.params.id;
           authordata.findOne({_id:id})
           .then(function(author){
              // res.send("edit");
              authordata.findOneAndDelete({_id:id},req.body,function(req,res1){
                res.redirect("/authors");  
           }); 
             
        });
    
    });
 /*   authorRouter.post("/deleteauthor/:id",function(req,res){

        const id= req.params.id; 
           authordata.findOne({_id:id})
            .then(function(author){
               authordata.findOneAndDelete(id,req.body,function(req,res1){
                    res.redirect("/authors");  
               });
                })
           
          
     });*/
   
    authorRouter.get("/:id",function(req,res){

        const id= req.params.id;
    authordata.findOne({_id:id})
    .then(function(author){
    res.render("author",{
        nav,
        title:"Library",
        author
    });
    })
        
    });
    return authorRouter;
}

module.exports=authordetails;

