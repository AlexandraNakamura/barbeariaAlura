
const botaoEnviar = document.querySelector("#enviarFormulario").addEventListener("click", enviarDados);

function enviarDados(){

    if(document.querySelector("#nomesobrenome").value != "" &&
        document.querySelector("#email").value != "" &&
        document.querySelector("#telefone").value != "" &&
        document.querySelector(".atendimentoBox").value != "")
        {
            alert("Entraremos em contato com você")
        } else {
            alert("Você precisa preencher o campo em branco")
        }
};


