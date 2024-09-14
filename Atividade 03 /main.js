const button = document.getElementsByName("consultar")[0];
const cepInput = document.getElementsByName("CEP")[0];
const complemento = document.getElementsByClassName("complemento")[0];
const logradouro = document.getElementsByClassName("logradouro")[0];
const bairro = document.getElementsByClassName("bairro")[0];
const estado = document.getElementsByClassName("estado")[0];
const cidade = document.getElementsByClassName("cidade")[0];
const erro = document.getElementsByClassName("erro")[0];0

button.addEventListener('click', async () => {
    const cep = cepInput.value.trim();

    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`) 
        const data = await response.json()

        console.log(complemento)
        cidade.innerHTML = `Cidade: ${data.localidade}`
        complemento.innerHTML = `Complemento: ${data.complemento}`
        logradouro.innerHTML = `Logradouro: ${data.logradouro}`
        bairro.innerHTML = `Bairro: ${data.bairro}`
        estado.innerHTML = `Estado: ${data.estado}`
        erro.innerHTML = ` `
        console.log(complemento)
    }
    catch (error){
        cidade.innerHTML = `Cidade:`
        complemento.innerHTML = `Complemento:`
        logradouro.innerHTML = `Logradouro:`
        bairro.innerHTML = `Bairro:`
        estado.innerHTML = `Estado:`
        erro.innerHTML = `Ocorreu algum erro ao carregar os dados`

    }



});

