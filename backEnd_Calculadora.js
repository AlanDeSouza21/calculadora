let class_numeros = document.getElementsByClassName("numeros")
let class_sinais = document.getElementsByClassName("sinais")
let id_calculo01 = document.getElementById("calculo01")
let id_calculo02 = document.getElementById("calculo02")


function digitar(acao){
    let id_calculo01 = document.getElementById("calculo01").innerHTML
    document.getElementById("calculo01").innerHTML = id_calculo01 + acao
    
}

function limpar(){
    document.getElementById("calculo01").innerHTML = ''
    document.getElementById("calculo02").innerHTML = ''
}

function apagar(){
    let id_calculo01 = document.getElementById("calculo01").innerHTML
    document.getElementById("calculo01").innerHTML = id_calculo01.substring(0, id_calculo01.length -1)
}

function calculo(){
    let id_calculo02 = document.getElementById("calculo02").innerHTML
    let id_calculo01 = document.getElementById("calculo01").innerHTML
    if (id_calculo01){
        id_calculo02 = document.getElementById("calculo02").innerHTML = eval(id_calculo01)
    }
    else{
        window.alert('nenhum valor digitado')
    }
}