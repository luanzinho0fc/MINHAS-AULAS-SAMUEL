var altura = document.getElementById("altura")
var peso = document.getElementById("peso")
var btn = document.getElementById("btn")
var fim = document.getElementById("fim")

function calculaIMC() {
  const valorAltura = parseFloat(altura.value)
  const valorPeso = parseFloat(peso.value)
  const imc = valorPeso / (valorAltura * valorAltura)
  return imc.toFixed(2)
}

function calcular() {
  const imc = calculaIMC()
  var mensagem = ""

  if (imc >= 18.5 && imc <= 24.9) {
    mensagem = "Peso normal"
  }

  fim.innerHTML = `
    <p>${mensagem}</p>
    <div class="linha"></div>
    <div class="linha"></div>
    <div class="resultado">
        <div class="esquerda">
            <h2>${imc}</h2>
            <p>Seu IMC</p>
        </div>
        <div class="direita"></div>
    </div>
    <div class="linha"></div>
  `
}

btn.addEventListener("click", calcular)