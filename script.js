let numero1 = document.querySelector('#numero1')
let numero2 = document.querySelector('#numero2')
let div = document.querySelector('#div')
function analisar(){ 
    let n1 = Number(numero1.value)
    let n2 = Number(numero2.value)
    if( n2 > n1){
        div.innerHTML=`o primeiro número é menor que o segundo `
    }else{
        div.innerHTML=`o segundo número é maior que o primeiro `
    }
}