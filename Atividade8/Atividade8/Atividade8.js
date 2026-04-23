Array_pesquisa = []
media_idade = 0;
maior_idade = 0;
menor_idade = 100;
qtd_pessimo = 0;
porcentagem_otimo_bom = 0;
qtd_masculino = 0;
qtd_feminino = 0;
qtd_outro = 0;


function registrarResposta() 
    {
        var idade = document.getElementById("idade").value;
        var sexo = document.getElementById("sexo").value;
        var opiniao = document.getElementById("opiniao").value;
        resposta = { "idade": idade, "sexo": sexo, "opiniao": opiniao };
        Array_pesquisa.push(resposta);
    }

function preencherResposta() 
    {
        document.getElementById("idade").value = Math.random() * 100
        let aux = Math.random();
        if (aux < 0.4) {
            document.getElementById("sexo").value = "masculino"
        } else if (aux < 0.7) {
            document.getElementById("sexo").value = "feminino"
        } else {
            document.getElementById("sexo").value = "outro"
        }
        aux = Math.random();
        if (aux < 0.25) {
            document.getElementById("opiniao").value = 1;
        } else if (aux < 0.5) {
            document.getElementById("opiniao").value = 2;
        } else if (aux < 0.75) {
            document.getElementById("opiniao").value = 3;
        } else {
            document.getElementById("opiniao").value = 4;
        }
        registrarResposta();
    }

/*for (let i = 0; i < 45; i++) {
    preencherResposta();
}
*/
function respostaFinal()
{
    i = 0;
    for (i = 0; i < 45; i++) 
        {
        soma_idade += Math.floor(Array_pesquisa.idade)
        }
    media_idade = soma_idade / 45;
    console.log("A média de idade é: " + media_idade);
    for (i = 0; i < 45; i++)
        {
            let aux = Array_pesquisa[i].idade;
            if (aux > maior_idade) {
                maior_idade = aux;
            }
            if (aux < menor_idade) {
                menor_idade = aux;
            }
            if(Array_pesquisa[i].opiniao == 1) {
                qtd_pessimo++;
            }
            if(Array_pesquisa[i].opiniao == 3 || Array_pesquisa[i].opiniao == 4) {
                porcentagem_otimo_bom++;
            }
            if(Array_pesquisa[i].sexo == "masculino") {
                qtd_masculino++;
            }
            if(Array_pesquisa[i].sexo == "feminino") {
                qtd_feminino++;
            }
            if(Array_pesquisa[i].sexo == "outro") {
                qtd_outro++;
            }
        }
    console.log("A maior idade é: " + maior_idade);
    console.log("A menor idade é: " + menor_idade);
    console.log("A quantidade de pessoas que responderam péssimo é: " + qtd_pessimo);
    console.log("A quantidade de pessoas que responderam ótimo ou bom é: " + porcentagem_otimo_bom);
    console.log("A quantidade de pessoas do sexo masculino é: " + qtd_masculino);
    console.log("A quantidade de pessoas do sexo feminino é: " + qtd_feminino);
    console.log("A quantidade de pessoas do sexo outro é: " + qtd_outro);
}