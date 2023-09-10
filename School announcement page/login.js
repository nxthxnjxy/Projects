var username;
var password;

var usernameC = "NPSS";
var passwordC = "NPSS"

function loginProtocol() {

    var username = document.getElementById("htmlTUsername").value
    var password = document.getElementById("htmlTPassword").value

//Takes the users input and makes it equal to the variable. That way I can use an if statement to check it

    if (username == usernameC && password == passwordC) {
        alert('Welcome back to the teacher creator page!')
        window.location.href = "teachercreator.html"
    } else {
        alert('Username and/or password is incorrect, please try again')
    }



}   