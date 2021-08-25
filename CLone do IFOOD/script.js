/*quero criar um comando chamado irritarUsuario que faça o Seguinte 

- chame um alerto mandando oi 
- chame um alerto mandando oi de novo
-chame um alerto mandando oi mais uma vez

function IrritarUsuario() {
    alert('OI');
    alert('OI DE NOVO');
    alert('OI MAIS UMA VEZ');
}     */


/* Adicionar uma borda verde em cada produto 
trocar a borda da caixinha ao clicar em cima*/


let prato; 
let bebida;
let sobremesa;

function EscolherFrango(){
    document.getElementById("frango").style.borderColor = "green";
    document.getElementById("carne").style.borderColor = "white";

    prato = "frango";
    
}


function EscolherCarne(){
    document.getElementById("carne").style.borderColor = "green";
    document.getElementById("frango").style.borderColor = "white";

    prato = "Carne";
}

function EscolherCoca(){
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("suco").style.borderColor = "white";

    bebida = "Refrigerante";
}

function EscolherSuco(){
    document.getElementById("suco").style.borderColor = "green";
    document.getElementById("coca").style.borderColor = "white";

    bebida = "Suco";
}

function EscolherPudim(){
    document.getElementById("pudim").style.borderColor = "green";
    document.getElementById("milkshake").style.borderColor = "white";

    sobremesa = "Pudim";
}

function EscolherMilkshake(){
    document.getElementById("milkshake").style.borderColor = "green";
    document.getElementById("pudim").style.borderColor = "white";

    sobremesa = "Milkshake";
}

function FinalizarPedido() {

    let mensagem; 

    mensagem = "Olá, eu gostaria de pedir um combo: " + prato + ", " + bebida + " e " + sobremesa;


    window.open("https://wa.me/+5521999289987?text=" + mensagem)
}















