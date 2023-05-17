const HandleSubmit = (event) =>{
    event.preventDefault();
    const nome = document.querySelector('#nome').value;
    const telefone = document.querySelector('#telefone').value;
    const email = document.querySelector('#email').value;
    const servico = document.querySelector('input[name="serweb"]:checked').value;
    const estado = document.querySelector('#estado').value;
    const equipamento = document.querySelector('input[name="tecnologia"]:checked').value;
    fetch('https://api.sheetmonkey.io/form/oJS3kQpTUiENGmntq3kLC1',{
                method: 'post',
                headers: {
                    'Accept': 'aplication/json',
                    'Content-type': 'application/json',
                 },
                body: JSON.stringify({ "nome":nome,"telefone":telefone,"email":email,"servico":servico,"estado":estado,"equipamento":equipamento}),
            }).then(() =>
                {
                alert("Dados enviados com sucesso")
            })

}
document.querySelector('form').addEventListener('submit', HandleSubmit);  
        