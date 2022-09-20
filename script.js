

function clicar(strin){
    var guardaStrin=window.document.getElementById("tela-resposta").innerHTML;
    window.document.getElementById("tela-resposta").innerHTML=guardaStrin + strin;
    

};

function teclaNumero(num){
    var guardaNumero=window.document.getElementById("tela-resposta").innerHTML;
    window.document.getElementById("tela-resposta").innerHTML=guardaNumero + num;
};

function voltar( ){
    var voltarcaracter = window.document.getElementById("tela-resposta").innerHTML;
    window.document.getElementById("tela-resposta").innerHTML=voltarcaracter.substring(0,voltarcaracter.length-1);
};

function clicarFixa(){
    var maiscula = window.document.getElementById("tela-resposta").innerHTML;
    if(maiscula){
        window.document.getElementById("tela-resposta").innerHTML=maiscula +maiscula.toLocaleUpperCase() ;
    };
    
};

function clean(){
    window.document.getElementById("tela-resposta").innerHTML= "";
    

};

function teclaSoma(){
    var somar= window.document.getElementById("tela-resposta").innerHTML;
    if(somar){
        document.getElementById("tela-resposta").innerHTML= eval(somar);
    };
};
