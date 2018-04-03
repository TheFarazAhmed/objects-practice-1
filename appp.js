// var ob = {
//     name: "FARAZ",
//     email : undefined,
//     mob: "03321327313",
//     city: "Karachi",
//     passw: undefined
// };
// alert(ob.mob);
// alert(ob);
function submit(){
    var name = document.getElementById("name").value.toUpperCase();
    var email = document.getElementById("email").value.toLowerCase();
    var mob = document.getElementById("number").value;
    var city = document.getElementById("city").value.toUpperCase();
    var pw = document.getElementById("password").value;

    localStorage.setItem("NAME",name);
    localStorage.setItem("EMAIL",email);
    localStorage.setItem("CONTACT",mob);
    localStorage.setItem("CITY",city);
    localStorage.setItem("PASSWORD",pw);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("city").value = "";
    document.getElementById("password").value = "";
}

function func1(){
    var a = document.getElementById("username").value;
    var b = document.getElementById("password").value;
    if(a==="bahubali")
    {
        if(b === "katappa")
        window.location = "index.html";    
        else
        alert("Incorrect Password");
    }
    else
        alert("Invalid Username");
}
