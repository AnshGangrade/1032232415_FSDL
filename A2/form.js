function validateForm(){

let name=document.getElementById("username").value.trim();
let email=document.getElementById("email").value.trim();
let phone=document.getElementById("phone").value.trim();
let pass=document.getElementById("password").value;
let confirm=document.getElementById("confirm").value;
let msg=document.getElementById("msg");

if(name==""||email==""||phone==""||pass==""||confirm==""){
msg.innerHTML="Fields cannot be empty";
msg.style.color="red";
return false;
}

let phoneReg=/^[0-9]{10}$/;
if(!phoneReg.test(phone)){
msg.innerHTML="Phone must be 10 digits";
return false;
}

let passReg=/^(?=.*[A-Z])(?=.*[0-9])(?=.*[&$#@]).{7,}$/;
if(!passReg.test(pass)){
msg.innerHTML="Weak password format";
return false;
}

if(pass!==confirm){
msg.innerHTML="Passwords do not match";
return false;
}

let emailReg=/^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
if(!emailReg.test(email)){
msg.innerHTML="Invalid email format";
return false;
}

msg.innerHTML="Registration successful!";
msg.style.color="green";

/* store session */
let student={
    username:name,
    email:email,
    phone:phone
};

sessionStorage.setItem("studentData",JSON.stringify(student));

return false;
}
