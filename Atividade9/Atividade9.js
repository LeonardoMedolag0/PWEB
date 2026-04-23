function registrarMaiorNumero()
    {
        var numero1 = document.getElementById("number1").value;
        var numero2 = document.getElementById("number2").value;
        var numero3 = document.getElementById("number3").value;
        var maior = Math.max(numero1, numero2, numero3)
        console.log("O maior número é: " + maior);
    }
function registrarOrdenacao()
    {
        var numero1 = document.getElementById("number1").value;
        var numero2 = document.getElementById("number2").value;
        var numero3 = document.getElementById("number3").value;
        var numeros = [numero1, numero2, numero3];
        numeros.sort((a, b) => a - b);
        console.log("Os números em ordem crescente são: " + numeros);

    }
function registrarPalavra()
    {
        var palavra = document.getElementById("palavra").value.replace(/\s/g, "").toLowerCase();
        var palavraInvertida = palavra.split("").reverse().join("");
        if (palavra == palavraInvertida) {
            console.log("A palavra é um palíndromo.");
        } else {
            console.log("A palavra não é um palíndromo.");
        }
    }