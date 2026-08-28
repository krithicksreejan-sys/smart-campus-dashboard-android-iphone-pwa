const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email === "admin@gmail.com" && password === "123456"){
        alert("Login Successful");
        window.location.href = "dashboard.html";
    }
    else{
        alert("Invalid Email or Password");
    }
});