function loginvalidate()
{

    if(checkuser()&&checkpwd())
    {return true;}
    else
    { alert("User Name /password must be alphanumeric");
        return false;}

}
    //function for checking username in signin page
  function checkuser()
  { var uname=document.getElementById("username");
  var alp=/^([\w]+)$/
    if(uname.value.length<6)
    {
        uname.style.border="solid red";
        uname.focus();
        alert("UserName cannot be empty or length is too short");
        return false;

    }else if(!alp.test(uname.value)){
        //alert("User Name must be alphanumeric");
        uname.style.border="solid red";
        uname.focus();
        return false;
    }
    else{uname.style.border="solid green";
        return true;}
}
//function for checking password in signin page
 function checkpwd()
{
     var pwd=document.getElementById("password");
     var alp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
     //var a=/^([a-z][A-Z]+)$/;
     if(pwd.value=="")
     {
        alert("Password cannot be empty");
        pwd.style.border="solid red";
        pwd.focus();
         return false;
     }
     else{
         if(alp.test(pwd.value))
         {
           if(pwd.value.length>10)
           {  pwd.style.border="solid green";
             alert("Strong password and valid format");
           return true;
           }
           else
           {
             pwd.style.border="solid orange";
             pwd.focus();
             alert("Valid format but medium password");
           return false;
           }
         }
          else
           {
             pwd.style.border="solid red";
             pwd.focus();
            alert("Password must be alphanumeric and minimum one uppercase and lower case letter and digit");
             return false;
           }
        }
}

//function for signup page
function signupvalidate()
{

    if(checkname()&&checkaddress()&&checkgender()&&checkdob()&&checkmail()&&phvalidate()&&checkusername()&&checkpassword()&&confirmpwd())
    {
        alert("Success");
        return true;}
    else
    { alert("Please fill all fields");
        return false;}
}
//function for name in signup page
function checkname()
{
 var fname=document.getElementById("fname");
 var exp = /^[a-zA-Z]+(\s|\.{0,1})[a-zA-Z]+(\s|\.{0,1})[a-zA-Z]+$/;

 //var exp=/^([a-zA-Z])+$/;
if(!exp.test(fname.value))
 {
     fname.style.border="solid red";
     alert("Name must be alphabets with space or dot as seperator");
     fname.focus();
     return false;
 }
 else {
    fname.style.border="solid green";
    return true;
}
}

//function for checking address in signup page
function checkaddress(){
    var address=document.getElementById("address"); 
   // var exp=/^([a-zA-Z])+$/;
    var exp=/^[a-zA-Z0-9\s\,\.\'\-]+$/
    if(!exp.test(address.value))
    {
        address.style.border="solid red";
        alert("Address can contain alphabets,numbers,whitespace, comma(,), dot(.), apostrophe ('), and dash(-),unserscore(_) symbols ");
   address.focus();
        return false;
    }
    else
    {
        address.style.border="solid green";
        return true;
    }
}
//function to check radio button
function checkgender(){
    if(genderselect()==false){
        alert(" Please select one from Male /Female /others ");
        return false;
    }
    else{
    
    return true;
    }
    }
    function genderselect(){
      var male=document.getElementById("male");
        var female=document.getElementById("female");
        var other=document.getElementById("others");
        
        if(male.checked!=true&&female.checked!=true&&others.checked!=true)
        {
          alert("Gender not selected");
            return false;
        }
        else{
          //alert("Gender selected");
            return true;
        }

}
function message()
{
  alert("please select your Date of Birth ");
}
//Function to check the DOB
function checkdob()
{
    var dob=document.getElementById("dob");
    if(dob.value=="")
    {
        alert(" Please select your Date Of Birth ");
        dob.style.border="solid red"
        //dob.focus();
        return false;
    }
    else
    {dob.style.border="solid green";
        return true;
    }

}


//function for checking email in signup page
function checkmail(){ 

    var exp=/^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})((\.[a-z]{2,3}?)?)$/;  
    var mail=document.getElementById("email");
if(!exp.test(mail.value))
    {
        mail.style.border="solid red";
        mail.focus();
        alert("email format is not valid");
        return false;
    }else
    {
        mail.style.border="solid green";
        //alert("valid email");
        return true;
    }
}
//function for phone number in signup page

function phvalidate(){
    var mno=document.getElementById("mno");
//var ph=/^([1-9])([0-9]{9})$/;
var ph=/^(\d{3})(\.?\-?\ ?)(\d{3})(\.?\-?\ ?)(\d{4})$/;
if(ph.test(mno.value)&&mno.value.length>1)
  {
    //alert("valid no");
    mno.style.border="solid green";
    return true;
  }
  else
  {
      mno.style.border="solid red";
      mno.focus();
    alert("Mobile no must be numbers and 10 digits and valid formats xxx xxx xxxx or xxx.xxx.xxxx or xxx-xxx-xxxx ");
    return false;
  }} 
//function for checking username in signup page
function checkusername(){
    var uname=document.getElementById("username");
    var alp=/^([\w]+)$/
if(uname.value.length==0||uname.value.length<6)
{
    
    uname.style.border="solid red";
    uname.focus();
    alert("User Name must contain atleast 6 letter or alpha numeric ");
    return false;
}
else if(!alp.test(uname.value)){
  uname.focus();
    alert("User Name must be alphanumeric");
    return false;

}else{
    uname.style.border="solid green";
    return true;
}
}
//function for checking password in signup page
function checkpassword()
{
    var pwd=document.getElementById("password");
    var alp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
     if(alp.test(pwd.value))
        {
          if(pwd.value.length>10)
          {  pwd.style.border="solid green";
            //alert("Strong password and valid format");
          return true;
          }
          else
          {
            pwd.style.border="solid orange";
            pwd.focus();
            alert("Valid format but medium password");
          return false;
          }
        }
         else
          {
            pwd.style.border="solid red";
            pwd.focus();
           alert("Password must be alphanumeric and minimum one uppercase and lower case letter and digit");
            return false;
          } 
}
function confirmpwd(){
    var pwd=document.getElementById("password");
    var repwd=document.getElementById("repassword");
    if(repwd.value=="")
    {
    alert("Confirm password cannot be empty ");
    repwd.focus();
        repwd.style.border=" solid red";
        return false;
    }
    if(pwd.value!=repwd.value)
    {
        alert("Confirm password is not corret ");
        repwd.style.border=" solid red";
        repwd.focus();
        return false;
    }
    else
    {
        repwd.style.border="solid green";
        return true;}
}
