var valorCarro = parseFloat(prompt("Digite o valor do carro"))
var valorFinal = (valorCarro * 0.28) + (valorCarro * 0.45) + valorCarro
var valorFinaf = valorFinal.toFixed(2)
alert("O valor final do carro é "+valorFinaf)