

function clicar(strin){
    var guardaStrin=window.document.getElementById("tela-resposta").innerHTML;
    window.document.getElementById("tela-resposta").innerHTML=guardaStrin + strin;

}

function teclaNumero(num){
    var guardaNumero=window.document.getElementById("tela-resposta").innerHTML;
    window.document.getElementById("tela-resposta").innerHTML=guardaNumero + num;
}

reset.addEventListener("tela-resposta", function()
{

});