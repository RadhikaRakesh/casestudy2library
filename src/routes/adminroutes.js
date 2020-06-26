const express=require("express");
const Bookdata=require("../model/bookdata");
const authordata=require("../model/authordata");
const adminRouter=express.Router();
//const bodyparser=require("body-parser");

//var urlencodedParser = bodyparser.urlencoded({ extended: false });

function router(nav)
{
var books=[
    {
        title:"Tom and Jerry",
        authors:"Joseph barbera",
        genere:"cartoon",
        img:"tom.png",
        summary:"Tom and Jerry convince Robyn, an orphan girl who runs away from home to escape her evil aunt, to return and accompany her. Later, they chance upon a great secret that Robyn's aunt has kept from her."
    },
    {
        title:"Harry Potter",
        authors:"J K Rowling",
        genere:"Fantacy",
        img:"harry.jpg",
        summary:"Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths."
    },
    {
        title:"Pathummayude Aadu",
        authors:"Basheer",
        genere:"Drama",
        img:"aadu.jpg",
        summary:"Pathummayude Aadu is a humorous novel by Vaikom Muhammad Basheer. The characters of the novel are members of his family and the action takes place at his home in Thalayolaparambu. The goat in the story belongs to his sister Pathumma."
    }
]
adminRouter.get("/addauthor",function(req,res){

    res.render("addauthor",
    {
         nav,
         title:"Library",
         books
    });

});
adminRouter.get("/addbook",function(req,res){

    res.render("addbook",
    {
         nav,
         title:"Library",
         books
    });

});
adminRouter.post("/addauthor",function(req,res){
//res.send("added author");
   /* res.render("addauthor",
    {
         nav,
         title:"Library",
        
    });*/

    var item={
        
        author:req.body.Authorname,
        language :req.body.language,
        genere:req.body.genere,
        works:req.body.works,
        image:req.body.photo
        }
        var author=authordata(item);
        author.save();
        res.redirect("/authors");
    
    

});
adminRouter.post("/addbook",function(req,res){

  // res.send("hello added details !");
  /*  res.render("addbook",
    {
         nav,
         title:"Library",
         
    }); */
var item={
    title: req.body.title,
    author:req.body.Authorname,
    genere:req.body.genere,
    summary:req.body.summary,
    image:req.body.photo
    }
    var book=Bookdata(item);
    book.save();
    res.redirect("/books");

});

adminRouter.get("/editbook/:id",function(req,res){
    // if(req.body.id=="edit"){
//console.log("hai post");
 
   Bookdata.findOne({_id:id})
   .then(function(book){
      // res.send("edit");
       res.render("editbook",{
           nav,
           title:"Library",
           book 
       });
    
     
   });
});
adminRouter.post("/editbook/:id",function(req,res){
    const id= req.params.id; 
   Bookdata.findOne({_id:id})
    .then(function(book){
       Bookdata.findOneAndUpdate(id,req.body,function(req,res){
            res.redirect("/authors");  
       });
        })
   
    
    });

adminRouter.get("/:id",function(req,res){

    const id= req.params.id;
    res.render("book",{
        nav,
        title:"Library",
        book : books[id]

    });
});


    
return adminRouter;
}
module.exports=router;