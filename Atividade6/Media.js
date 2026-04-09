aluno = prompt("Digite o nome do aluno.");
nota_1 = parseFloat(prompt("Digite a primeira nota do aluno."));
nota_2 = parseFloat(prompt("Digite a segunda nota do aluno."));
nota_3 = parseFloat(prompt("Digite a terceira nota do aluno."));
nota_4 = parseFloat(prompt("Digite a quarta nota do aluno."));
media = (nota_1 + nota_2 + nota_3 + nota_4) / 4;
media = media.toFixed(2);
alert("A média do aluno " + aluno + " é: " + media);
