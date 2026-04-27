let tarefas = []

function adicionarMensagem () {


    const inputMensagem = document.getElementById("inputLista")
    let mensagem = inputLista.value.trim()

    let adicionada = document.getElementById("adicionada")
    
    if (mensagem == "") {
        let mensagemErro = "Digite uma mensagem válida!"
        adicionada.textContent = mensagemErro
    } else {
        let mensagemSucesso = "Mensagem adicionada com sucesso!"
        adicionada.textContent = mensagemSucesso

        tarefas.push(mensagem)
        renderizarTarefas()

    }

    
    inputMensagem.value = ""
    
}

function renderizarTarefas () {

     const listaMensagem = document.getElementById("listaMensagem")

    listaMensagem.innerHTML =""

    
    for (let i = 0; i < tarefas.length; i++){

    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefas [i]

    let botaoRemover = document.createElement("button")
    botaoRemover.classList.add("botaoRemover")
    botaoRemover.textContent = "Remover"
    botaoRemover.onclick = () => removerMensagem(i)


    let botaoEditar = document.createElement("button")
    botaoEditar.classList.add("botaoEditar")
    botaoEditar.textContent = "Editar"
    botaoEditar.onclick = () => editarMensagem(i)
    

    novaTarefa.appendChild(botaoRemover)
    novaTarefa.appendChild(botaoEditar)
    listaMensagem.appendChild(novaTarefa)
    }

}

function removerMensagem (i) {
    tarefas.splice(i, 1)
    renderizarTarefas()

}

function editarMensagem (i) {
    let mensagemEditada = prompt("Digite a nova mensagem:")
    if (mensagemEditada !== null && mensagemEditada.trim() !== "") {
        tarefas[i] = mensagemEditada.trim()
        renderizarTarefas()
    }
}