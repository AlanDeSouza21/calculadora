var interacao = document.querySelectorAll('.interacao')
var id_calculo01 = document.getElementById("calculo01")
var id_calculo02 = document.getElementById("calculo02")
var id_lima = document.getElementById("limpa")
var id_apaga = document.getElementById("apaga")
var id_enter = document.getElementById("enter")

var vetorBase_calculo = []
var interrompe_sinal = 0

// INTERAÇÃO INICIAL COM BOTÕES
function digitar(indice){
    // INTERAÇÃO VISUAL DOS BOTÕES
    if (indice == 0 || indice == 5 || indice == 10 || indice == 15) {
        interacao[indice+1].style.backgroundColor = 'rgb(207, 113, 25)'
        interacao[indice+1].style.color = 'black'
    }

    interacao[indice].style.backgroundColor = 'rgb(36, 197, 189)'
    interacao[indice].style.color = 'black'

    const parametro = indice;
    setTimeout(function(){
        if (parametro == 0 || parametro == 5 || parametro == 10 || parametro == 15) {
            interacao[parametro+1].style.backgroundColor = 'black'
            interacao[parametro+1].style.color = 'rgb(207, 113, 25)'
        }
        interacao[parametro].style.backgroundColor = 'black'
        interacao[parametro].style.color = 'rgb(36, 197, 189)'
    }, 100 )

    // RECEBENDO CONTEÚDO
    var recebe = interacao[indice].textContent
    vetorBase_calculo.push(recebe)

    // RESTRIÇÃO SINAIS EM SEQUENCIA E SINAL NO INICIO
    var vetor_sinais = []
    for (var ind = 0; ind < vetorBase_calculo.length; ind++) {
        if (vetorBase_calculo[0] == '+' || vetorBase_calculo[0] == '-' || vetorBase_calculo[0] == '*'|| vetorBase_calculo[0] == '/' || vetorBase_calculo[0] == ',') {
            vetorBase_calculo.pop()
            vetor_sinais.pop()
        }
        if (vetorBase_calculo[ind] == ',' && vetorBase_calculo[ind-1] == ',') {
            vetorBase_calculo.pop()
            vetor_sinais.pop()
        }
        if (vetorBase_calculo[ind] == '+' || vetorBase_calculo[ind] == '-' || vetorBase_calculo[ind] == '*'|| vetorBase_calculo[ind] == '/') {
            vetor_sinais.push('S')
            if(vetor_sinais[ind-1] == 'S' && vetor_sinais[ind] == 'S' ){
                vetorBase_calculo.pop()
                vetor_sinais.pop()
            }
        }
        else{
            vetor_sinais.push('N') 
        }
    }

    // SEPARAÇÃO DE NUMEROS E SINAIS
    var vetor_N = []
    var vetor_S = []
    var vetor_Ntratado = []
    for (percorre of vetorBase_calculo) {
        vetor_N.push(percorre)
        if (percorre == '+' || percorre == '-' || percorre == '*'|| percorre == '/') {
            vetor_N.pop()
            vetor_N.push("|")
            vetor_S.push(percorre)
        }
        if (percorre == ',') {
            vetor_N.pop()
            vetor_N.push(".")
        }
    }
    
    var converte_S = vetor_N.join("")
    var divide = converte_S.split("|")
    
    // TRATAMENTO DE CASAS DECIMAIS
    for (var indice = 0; indice < divide.length; indice++){
        var separaVetor = divide[indice]
        
        var numero = Number(separaVetor).toLocaleString()
        var N_tratado = numero.toString()
        vetor_Ntratado.push(N_tratado)
    }
    
    // JUNTAR NUMEROS TRATADOS COM SINAIS
    var vetor_NS = []
    for (var b = 0; b < vetor_Ntratado.length; b++) {
        vetor_NS.push(vetor_Ntratado[b])
        vetor_NS.push(vetor_S[b])
    }
    // MOSTRAR NUMEROS Á SEREM CALCULADOS EM TELA
    var string = vetor_NS.join("")
    id_calculo01.innerHTML = string

}



function limpar(){
    // INTERAÇÃO VISUAL DOS BOTÕES 
    id_lima.style.backgroundColor = 'white'
    id_lima.style.color = 'black'
    setTimeout(function(){
        id_lima.style.backgroundColor = 'black'
        id_lima.style.color = 'white'
    }, 100 )

    // APAGA AS DIVs DE VISUALIZAÇÃO
    document.getElementById("calculo01").innerHTML = ''
    document.getElementById("calculo02").innerHTML = ''
    string = ''
    vetorBase_calculo.length = 0
}

function apagar(){
    // INTERAÇÃO VISUAL DOS BOTÕES 
    id_apaga.style.backgroundColor = 'rgb(36, 197, 189)'
    id_apaga.style.color = 'black'
    setTimeout(function(){
        id_apaga.style.backgroundColor = 'black'
        id_apaga.style.color = 'rgb(36, 197, 189)'
    }, 100 )

    // APAGA CONTEUDO DA PRIMEIRA DIV
    let id_calculo01 = document.getElementById("calculo01").innerHTML
    document.getElementById("calculo01").innerHTML = id_calculo01.substring(0, id_calculo01.length -1)
    vetorBase_calculo.pop()

    if (!id_calculo01){
        id_calculo02 = document.getElementById("calculo02").innerHTML = ''
    }
    else{

    }
}


function calculo(){
    // INTERAÇÃO VISUAL DOS BOTÕES 
    id_enter.style.backgroundColor = 'green'
    id_enter.style.color = 'black'
    setTimeout(function(){
        id_enter.style.backgroundColor = 'black'
        id_enter.style.color = 'green'
    }, 100 )

    // RETIRA VIRGULA COLOCA PONTO
    let id_calculo01 = document.getElementById("calculo01").innerHTML
    var stringVetor = vetorBase_calculo.join("")
    var str = stringVetor
    let trocaVpP = str.replace(/,/g, ".")
    var sinalVetor = trocaVpP.split('')
    var converte = trocaVpP.split('')

/*-------------- SEPARA NUMEROS ------------------------*/
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
    else if(converte[z] == ","){
        local = converte.indexOf("/")
        var valor = converte[local]="|"
    }
    else{

    }

}

var paraStr = converte.join("")
var separa = paraStr.split("|")


/*-------------- SEPARA SINAIS ------------------------*/
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
// PRIMEIRO CALCULO QUE SERÁ USADO COMO BASE PARA O RESTANTE
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
        id_calculo02 = document.getElementById("calculo02").innerHTML = resultado_1.toLocaleString()
    }
    else{
        window.alert('nenhum valor digitado')
    }
}