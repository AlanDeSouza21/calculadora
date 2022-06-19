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
    if (!id_calculo01){
        id_calculo02 = document.getElementById("calculo02").innerHTML = ''
    }
    else{

    }
}

function calculo(){
    let id_calculo01 = document.getElementById("calculo01").innerHTML
    var str = id_calculo01
    var sinalVetor = str.split('')
    var converte = str.split('')

/*-------------- NUMEROS ------------------------*/
let local = ''
for (var z = 0; z < converte.length; z++){
    if(converte[z] == "+"){
        local = converte.indexOf("+")
        var valor = converte[local]="|"
    }
    else if(converte[z] == "-"){
        local = converte.indexOf("-")
        var valor = converte[local]="|"
    }
    else if(converte[z] == "*"){
        local = converte.indexOf("*")
        var valor = converte[local]="|"
    }
    else if(converte[z] == "/"){
        local = converte.indexOf("/")
        var valor = converte[local]="|"
    }
    else{

    }

}

var paraStr = converte.join("")
var separa = paraStr.split("|")


/*-------------- SINAIS ------------------------*/
var ate = []
for (var i = 0; i < sinalVetor.length; i++){
    var sinais = sinalVetor[i];
    switch (sinais){

    case "+":
        var acha = sinalVetor.indexOf('+')
        var pegaSinal = sinalVetor[acha]
        var insereSinal = ate.push(pegaSinal)
    break;
    
    case "-":
        var acha = sinalVetor.indexOf('-')
        var pegaSinal = sinalVetor[acha]
        var insereSinal = ate.push(pegaSinal)
    break;
    
    case "*":
        var acha = sinalVetor.indexOf('*')
        var pegaSinal = sinalVetor[acha]
        var insereSinal = ate.push(pegaSinal)
    break;
    
    case "/":
        var acha = sinalVetor.indexOf('/')
        var pegaSinal = sinalVetor[acha]
        var insereSinal = ate.push(pegaSinal)
    break;
        
    default:

}
}

if(ate[0] == "+"){
    var calculo = Number(separa[0]) + Number(separa[1])
    var resultado_1 = calculo
}
else if(ate[0] == "-"){
    var calculo = Number(separa[0]) - Number(separa[1])
    var resultado_1 = calculo
}
else if(ate[0] == "*"){
    var calculo = Number(separa[0]) * Number(separa[1])
    var resultado_1 = calculo
}
else if(ate[0] == "/"){
    var calculo = Number(separa[0]) / Number(separa[1])
    var resultado_1 = calculo
}
else{}


/*-------------- RESULTADO FINAL ------------------*/

for(var p = 1; p < separa.length-1; p++){
    var sinal = ate[p]
    var valor2 = Number(separa[p+1])
    if(sinal == "+"){
        resultado_1 = resultado_1 + valor2
    }
    else if(sinal == "*"){
        resultado_1 = resultado_1 * valor2
    }
    else if(sinal == "/"){
        resultado_1 = resultado_1 / valor2
    }
    else if(sinal == "-"){
        resultado_1 = resultado_1 - valor2
    }    
}

    if (id_calculo01){
        id_calculo02 = document.getElementById("calculo02").innerHTML = resultado_1
    }
    else{
        window.alert('nenhum valor digitado')
    }
}
