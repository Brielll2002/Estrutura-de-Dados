let fila = [];
let length = 0;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function createFila(){
    readline.question("Qual será o tamanho da fila ?", (leng)=>{
        length = Number(leng)

        function addItem(){
            readline.question("Adicione um item a fila", (item)=>{
                fila.push(item)
                console.log(fila)
            })
        }addItem()

    })
}createFila()