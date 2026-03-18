<!DOCTYPE html>
<html>

<head>
<title>User Registration</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h2>User Registration</h2>

<form onsubmit="registerUser(event)">

Name:<br>
<input type="text" id="name"><br><br>

Phone Number:<br>
<input type="text" id="phone"><br><br>

Date of Birth:<br>
<input type="date" id="dob"><br><br>

Aadhar Number:<br>
<input type="text" id="aadhar"><br><br>

PAN Number:<br>
<input type="text" id="pan"><br><br>

Address:<br>
<input type="text" id="address"><br><br>

<button type="submit">Register</button>

</form>

<script>

function registerUser(event){

event.preventDefault();   // stops form refresh

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;

if(name == "" || phone == ""){
alert("Please fill all fields");
return;
}

/* Save user info */

localStorage.setItem("userName", name);

/* Redirect */

window.location.href = "./dashboard.html";

}

</script>

</body>
</html>
