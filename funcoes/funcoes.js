/* functions / Funções
        - Trecho de código que é executado
          SOMENTE quando solicitado
        - Trecho de código que pode ser reutilizado várias vezes
*/


/* void */

function digaMeuNome(){
    const name = 'Neto'
    
    console.log(name)
}

/* parametros */

function soma(numero1, numero2) {
    const resultado = numero1 + numero2

    console.log(resultado)
}

/* return */

function estaEndividado(receita, gastos) {
    if (receita > gastos) {
        return 'Está no AZUL'
    } else {
        return 'Está no VERMELHO'
    } 
}

const maria = estaEndividado(5000, 7000)
const joao = estaEndividado(10000, 2000)

console.log(maria)
console.log(joao)

/* Arrow function */

function abacate(){} // Forma clássica
const digaMeuNome2 = () => { // Forma moderna
    console.log('Neto')
}

digaMeuNome2()