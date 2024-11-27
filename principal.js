//f498455e485da93879166b0f5da0ebb6
//https://api.openweathermap.org/data/2.5/weather?q=curitiba&appid=301090ef474ac02442ac92a41d254b43&units=metric&lang=pt_br

const botainho = document.getElementById("botainho")
const imagem = document.getElementById("imagem")
const temperatura = document.getElementById("temperatura")
const descricao = document.getElementById("descricao")
const inputcidades = document.getElementById("cidades")
const key = "301090ef474ac02442ac92a41d254b43"
const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt_br"
botainho.addEventListener("click", () => {
    cidade = inputcidades.value
    if (cidade) {
        buscarClima(cidade)
    } else {
        alert("Cidade Inválida")
    }
})
async function buscarClima(cidade) {
    console.log(cidade)
    const respostaapi = await fetch(`${api}&q=${cidade}&appid=${key}`)
    const data = await respostaapi.json()
    console.log(respostaapi)
    if (respostaapi.ok) {
        resultado(data)
        console.log(data)

    } else {
        alert("digite um nome de cidade valido")
    }
}
function resultado(data) {
    const {
        main, weather
    } = data
    temperatura.innerHTML = Math.round(main.temp) + "ºC"
    descricao.innerHTML = weather[0].description
    imagem.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
}