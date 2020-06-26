function authorvalidate()
{
    var aname=document.getElementById("aname");
    var lan=document.getElementById("language");
    var work=document.getElementById("works");
    var ph=document.getElementById("photo");
    var ge=document.getElementById("genere");
    if(checkname(aname)&&checklanguage(lan)&&checkgenere(ge)&&checkwork(work)&&checkphoto(ph))
    {return true;}
    else
    { alert("Please fill all the fields");
        return false;}

}
function checkname(name)
{
 
 var exp = /^[a-zA-Z]+(\s|\.{0,1})[a-zA-Z]+(\s|\.{0,1})[a-zA-Z]+$/;

 //var exp=/^([a-zA-Z])+$/;
if(!exp.test(name.value))
 {
     name.style.border="solid red";
     alert("Name must be alphabets with space or dot as seperator");
     name.focus();
     return false;
 }
 else {
    name.style.border="solid green";
    return true;
}
}
function checklanguage(lan)
  {
  var alp=/^([a-zA-Z]+)$/
    if(lan.value.length<1)
    {
        lan.style.border="solid red";
        lan.focus();
        alert("This field cannot be empty ");
        return false;

    }else if(!alp.test(lan.value)){
        //alert("User Name must be alphanumeric");
        lan.style.border="solid red";
        lan.focus();
        return false;
    }
    else{lan.style.border="solid green";
        return true;}
}
function checkgenere(ge)
  { 
  var alp=/^([\w\s\.]+)$/
    if(ge.value.length<1)
    {
        ge.style.border="solid red";
        ge.focus();
        alert("Genere cannot be empty ");
        return false;

    }else if(!alp.test(ge.value)){
        //alert("User Name must be alphanumeric");
        ge.style.border="solid red";
        ge.focus();
        return false;
    }
    else{ge.style.border="solid green";
        return true;}
}

function checkwork(work)
{
 
 //var exp = /^[a-zA-Z]+(\s|\.{0,1})[a-zA-Z]+(\s|\.{0,1})[a-zA-Z]+$/;

 var exp=/^([a-zA-Z\s\.\,])+$/;
if(!exp.test(work.value))
 {
     work.style.border="solid red";
     alert("This field  can contain alphabets with space or dot as seperator");
     work.focus();
     return false;
 }
 else {
    work.style.border="solid green";
    return true;
}
}
function checkphoto(ph)
{
    
    if(ph.value=="")
    {
        alert(" Please select your photo ");
        ph.style.border="solid red"
        ph.focus();
        return false;
    }
    else
    {ph.style.border="solid green";
        return true;
    }

}
function bookvalidate()
{
    var name=document.getElementById("atname");
    var title=document.getElementById("title");
    var summary=document.getElementById("summary");
    var ph=document.getElementById("photo");
    var ge=document.getElementById("genere");
    if(checkname(name)&&checkgenere(title)&&checkgenere(ge)&&checkwork(summary)&&checkphoto(ph))
   // if(checkname(name)&&checktitle(title)&&checkgenere(ge)&&checksummary()&&checkphoto())
    {   alert("Successfully added book details");
        return true;}
    else
    { alert("Please fill all the fields");
        return false;}

}