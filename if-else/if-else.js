/*
If & Else -> Controlador de Fluxo

Operadores de Comparação
> maior que
< menor que
== igual que (Comparando SOMENTE o valor)
=== igual que (Comparar o VALOR e o TIPO)
>= maior ou igual que
<= menor ou igual que

*/

// const notaDoAluno = 5


// if (notaDoAluno >= 5){
//     console.log('Aluno APROVADO')
// } else {
//     console.log('Aluno REPROVADO')
// }

const saoPaulo = 500000
const rioDeJaneiro = 250000

if(saoPaulo > 300000 && rioDeJaneiro > 300000) {
    console.log('Ambas as cidades são grandes')
} else {
    console.log('Pelo menos uma das cidades é pequena')
}