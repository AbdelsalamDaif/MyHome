
// alert("test register");
var users=[];
var user={ email_address:"", user_Name:"",password:"",confirm_password:""};
function register(){
    let EmailAddress=document.querySelector(".EmailAddress").value;
    console.log(EmailAddress);

    let UserName=document.querySelector(".UserName").value;
    console.log(UserName);

    let Password=document.querySelector(".Password").value;
    console.log(Password);

    let ConfirmPassword=document.querySelector(".ConfirmPassword").value;
    console.log(ConfirmPassword);
    
    // location.href = './login.html';
    
    if(!isEmpty(EmailAddress) && !isEmpty(UserName)  && !isEmpty(Password) || !isEmpty(ConfirmPassword)  ){
        console.log("success");
        var user={
            email_address:EmailAddress,
            user_Name:UserName,
            password:Password,
            confirm_password:ConfirmPassword
        }

        console.log(user);
         users.push(user);
         console.log(users);
         localStorage.removeItem("users");
         localStorage.setItem("users",JSON.stringify(users));

         console.log(JSON.parse(localStorage.getItem("users")));

        window.location ='file:///D:/Development/FrontEndCourse/SemiFinal/pages/login.html';

    }else{
        console.log("falied");
    }
   
  
}

function isEmpty(value){
    return (value == null || value.trim().length === 0);
  }
