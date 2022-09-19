

function clicar(strin){
    var guardaStrin=window.document.getElementById("tela-resposta").innerHTML;
    window.document.getElementById("tela-resposta").innerHTML=guardaStrin + strin;
    

}

function teclaNumero(num){
    var guardaNumero=window.document.getElementById("tela-resposta").innerHTML;
    window.document.getElementById("tela-resposta").innerHTML=guardaNumero + num;
}

function voltar( ){
    var voltarcaracter = window.document.getElementById("tela-resposta").innerHTML;
    window.document.getElementById("tela-resposta").innerHTML=voltarcaracter.substring(0,voltarcaracter.length-1);
}

function clicarFixa(){
    

}
function clean(){
    var limparparacteres= window.document.getElementById("tela-resposta").innerHTML= "";
    

}