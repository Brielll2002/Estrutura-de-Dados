//node Pilha.js

const cowsay = require('cowsay')
const colors = require('colors')

let pilha = [];
let length = 0;
let loop = 0;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function retirarItem(){
    if(length == 0){
        console.log(cowsay.say({
            text: "Pilha vazia !".green
        }))
        createPilha()
    }
    else{
        console.log(`Item ${pilha[length-1]} removido da pilha!`.green)
        pilha[length] = 0
        length--
    }
}

function createPilha(){
    pilha = []
    readline.question("Qual será o tamanho da pilha ?",(leng)=>{

        const tamanho = Number(leng);
        if(isNaN(tamanho)){
            console.log("Apenas número !".red)
            createPilha()
        }
        else{
            length = tamanho
            loop = tamanho
        
        function addItem(count){
                if(count < length){
                readline.question("Adicione um item a pilha: ", (item)=>{
                const itemN = Number(item)
                    if(isNaN(itemN)){
                        console.log("Apenas número !".red)
                        addItem()
                    }
                    else{
                        pilha.push(itemN)
                        addItem(count+1)
                    }
                })}
                else{
            console.log("Pilha completa! ".green, pilha)
    
                function delItem(reload){
                    if(reload > 0){
                        readline.question("Deseja tirar um item da lista ?"+"(S/N)".yellow, (response)=>{
                            switch (response) {
                                case "S": retirarItem()
                                break;
                        
                                case "s": retirarItem()
                                break;
                        
                                case "N": 
                                console.log("Okay".green)
                                createPilha()
                                break;
                        
                                case "n": 
                                console.log("Okay".green)
                                createPilha()
                                break;
                        
                                default: console.log("Escreva apenas 'S' ou 'N' !".red)
                                break;
                            }
                            delItem(loop - 1)
                        })
                    }
                    }delItem(loop)
            
            }
        }addItem(0)
    
}})
}
createPilha()