function Logar(){
    var email = document.getElementById('username').value;
    var senha = document.getElementById('password').value;

    if(email =="solutions@outlook.com.br" && senha =="admin"){
        alert("Sucesso");
        window.location.href="index.html";

    }else{
        alert("Usuario ou sennha invalido");
    }
}
