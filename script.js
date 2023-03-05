
const dados = [
    { nome: "A", variacoes: [] },
    { nome: "B", variacoes: ["roxo", "vermelho"]},
    { nome: "C", variacoes: ["azul", "cinza"]},
    { nome: "D", variacoes: ["marrom", "verde", "rosa"]}
]

/**
 * Função para criar um item div.
 *
 * @param item
 * @returns {HTMLDivElement}
 */
function divItem (item) {
    const box = document.createElement("div")
    box.className = "item";
    const divImagem = document.createElement("div")
    divImagem.className = "imagem";
    divImagem.style.backgroundImage = `url(./img/${item.nome}.png)`
    box.appendChild(divImagem)
    box.appendChild(divCores(item.nome, item.variacoes))
    return box;
}

/**
 * Função para criar o seletor de cores.
 * @param nome
 * @param cores
 * @returns {HTMLDivElement}
 */
function divCores (nome, cores) {
    const div = document.createElement("div")
    div.className = `cores`
    div.appendChild(botaoCor(nome,"branco"))
    cores.forEach((cor) => {
        div.appendChild(botaoCor(nome, cor))
    })
    return div
}

/**
 * Função para criar cada botão de cor.
 * @param nome
 * @param cor
 * @returns {HTMLSpanElement}
 */
const botaoCor = (nome, cor) => {
    const botao = document.createElement("span")
    botao.className = `botao ${cor}`
    botao.addEventListener("click", (e) => {
        const divImagem = botao.parentNode.previousSibling
        if(cor === "branco")
            divImagem.style.backgroundImage = `url(./img/${nome}.png)`
        else
            divImagem.style.backgroundImage = `url(./img/${nome}_${cor}.png)`

    })
    return botao
}

//pega o div conteudo e cria o grid
const contentElement = document.getElementById("conteudo")
//para cada elemento de dados faremos um div item.
dados.forEach((item) => {
    contentElement.appendChild(divItem(item))
})


