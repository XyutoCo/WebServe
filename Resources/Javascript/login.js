function submited(){
var password = "hidden";
var givenPass = document.getElementById("password").value;
var userName = document.getElementById("username").value;
if (givenPass != password){
alert("Incorrect Password");
window.location = 'index.html'
return;
}else if (userName == "Kit" && givenPass == password){
alert("Hello, " + userName + "\nWelcome to Xyuto..!");
window.location = givenPass + '.html'
}
}
