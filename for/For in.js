/*
    Estrutura de Repetição - LOOP
        - FOR IN
        - Usado para iterar Objetos
*/

const user = {
     name: 'Neto', 
     age: 28, 
     street: 'Rua dos bobos'
    }

for(let key in user){
    console.log(`${key} :  ${user[key]}`)
}