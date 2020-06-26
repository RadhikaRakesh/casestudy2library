const express=require("express");
const app=new express();


const  nav=[
    {link:"/login",name:"LOGIN"},
    {link:"/signup",name:"SIGNUP"},
    {link:"/books",name:"BOOKS"},
    {link:"/authors",name:"AUTHORS"},
    {link:"/admin/books/addbook",name:"ADD BOOKS"},
   // {link:"/admin/editbook",name:"EDIT BOOK"},
    {link:"/admin/authors/addauthor ",name:"ADD AUTHOR"}
];
const loginRouter=require("./src/routes/loginroutes")(nav);   
const booksRouter=require("./src/routes/bookRoutes")(nav);
const authorsRouter=require("./src/routes/authorRouters")(nav);
const signupRouter=require("./src/routes/signupRoutes")(nav);
const adminRouter=require("./src/routes/adminroutes")(nav);
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));
app.use("/books",booksRouter);
app.use("/authors",authorsRouter);
app.use("/login",loginRouter);
app.use("/signup",signupRouter);
//app.use("/addauthor",addauthor);
//app.use("/addauthor",authorsRouter);
app.use("/admin/authors",adminRouter);
app.use("/admin/books",adminRouter);


app.set("view engine","ejs");
app.set("views","./src/views");

app.get("/",function(req,res)
{

    res.render("index",
    {
        nav,
        title:"Library"
    });
});



app.listen(5100);