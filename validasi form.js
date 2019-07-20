var nameRegex = /a-zA-Z/;
var name = document.getElementById("username").value;
var password = document.getElementById("password").value;
var firstusername = /[0-9]/;
var passwordcheck = /= a-zA-Z/;

function validateForm (){
    if (name!= "" && password!=""){
    alert('Mohon isi data anda dengan lengkap')
    if (name.length = 5 - 9)
    return false;
    }    
        }
    if (name.indexOf=firstusername){
        alert("Tidak boleh diawalai dengan angka")
    if (password.length= 8)
    return true;
    }
    if (password!=passwordcheck){
        return false;
    }    
    if (name == nameRegex && password == passwordcheck){
    return true;
    }