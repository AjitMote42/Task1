var username = document.getElementById("inp1");
var email = document.getElementById("inp2");
var password = document.getElementById("inp3");
var address = document.getElementById("inp4");
var age = document.getElementById("inp5");

var showInfo = document.getElementById("showInfo");
var signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", function(event) {
    show();
    event.preventDefault(); // Prevent form submission and page reload
});

function show() {
    showInfo.innerHTML = `
        Username: ${username.value}<br>
        Email: ${email.value}<br>
        Password: ${password.value}<br>
        Address: ${address.value}<br>
        Age: ${age.value}
    `;

    var a = document.getElementById("invsbox");
    a.style.display = "block"
   
}