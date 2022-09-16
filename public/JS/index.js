const  myModal = new bootstrap.Modal("#register-modal");

//CRIAR CONTA
document.getElementById("link-conta").addEventListener("submit", function (e) {
    e.preventDefault();


const password = document.getElementById(password-create-input).value;
const email = document.getElementById(email-create-input).value;

console.log(email,password);

if(email.length <5)  {
    alert("preencha esse campo corretamente.")
    return;

    
if(password.length <5)  {
    alert("preencha esse campo corretamente.")
    return;
}

SaveAcount({
login:email
,password: password,
transactions: []

});

myModal.hide()

alert("conta criada com sucesso")
}})

function SaveAcount(data) {
localstorage.setItem(data.login,JSON.stringify(data))

}

if (logged) {

    SaveSession(logged, session)
    window.location.href = home.html
}

function SaveAcount(data, SaveSession) {
    if(SaveSession) {
    localstorage.setItem("session", data)}}