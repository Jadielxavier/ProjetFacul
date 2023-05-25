const HandleSubmit = (event) =>{
event.preventDefault();
const nome = document.querySelector('#nome').value;
const email = document.querySelector('#email').value;
const telefone = document.querySelector('#telefone').value;
const genero = document.querySelector('input[name="genero"]:checked').value;
const data = document.querySelector('#nascimento').value;
const cidade = document.querySelector('#cidade').value;
const estado = document.querySelector('#Estado').value;
// const endereco = document.querySelector('#endereco').value;
fetch('https://api.sheetmonkey.io/form/7hDZSXSnXkert7F1PajuVW',{
        method: 'post',
        headers: {
            'Accept': 'aplication/json',
            'Content-type': 'application/json',
         },
        body: JSON.stringify({ "nome":nome,"email":email,"telefone":telefone,"genero":genero,"nascimento":data,"cidade":cidade,"Estado":estado}),
    }).then(data =>
        {
        alert("Dados enviados com sucesso")
        
       })


}
document.querySelector('form').addEventListener('submit',HandleSubmit);  


