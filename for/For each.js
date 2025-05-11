/*


    ForEach(item, index, array)

    item) - Dados/Informações contidos na posição atual do Array
    index) - Número da Posição. Sempre começando em 0.
    array) - Retorna o Array completo

*/

const users = [
    { name: 'Neto', age: 28, contact: '(77) 999384918' },
    { name: 'Antonio', age: 18, contact: '(77) 999384918' },
    { name: 'Antonio Neto', age: 30, contact: '(77) 999384918' },
    { name: 'Antonio Amorim Neto', age: 15, contact: '(77) 999384918' },
]

users.forEach(function(item, index, array){
    if(item.age < 18){
        console.log(`O Cliente ${item.name}, posição ${index} é menor de idade.`)
    } 
})