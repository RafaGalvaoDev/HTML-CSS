var buttoncrip = document.querySelector(".criptografar");
var buttondescrip = document.querySelector(".descriptografar");
var persona = document.querySelector(".personagem"); 
var txt = document.querySelector(".texto");
var paragra = document.querySelector(".paragrafo");
var txtCript = document.querySelector(".textoCriptografado"); 

buttoncrip.onclick = cript;
buttondescrip.onclick = decript;

function cript(){
    escondeElemento();
    txtCript.textContent = criptTexto(pegaTexto());
}

function decript(){
    escondeElemento();
    txtCript.textContent = descriptTexto(pegaTexto());
    
}

function pegaTexto(){
    var areatexto = document.querySelector(".areaTexto");
    return areatexto.value;
}

function escondeElemento(){
    persona.classList.add("esconder");
    txt.classList.add("esconder");
    paragra.classList.add("esconder");
}

function criptTexto(mensagem){
    var texto = mensagem;
    var textoResultado = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoResultado += "ai"
        }
        else if(texto[i] == "e"){
            textoResultado += "enter"
        }
        else if(texto[i] == "i"){
            textoResultado += "imes"
        }
        else if(texto[i] == "o"){
            textoResultado += "ober"
        }
        else if(texto[i] == "u"){
            textoResultado += "ufat"
        }else{
            textoResultado += texto[i];
        }
        
    }
    return textoResultado;
}

function descriptTexto(mensagem){
    var texto = mensagem;
    var textoResultado = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoResultado += "a"
            i+=1
        }
        else if(texto[i] == "e"){
            textoResultado += "e"
            i+=4
        }
        else if(texto[i] == "i"){
            textoResultado += "i"
            i+=3
        }
        else if(texto[i] == "o"){
            textoResultado += "o"
            i+=3
        }
        else if(texto[i] == "u"){
            textoResultado += "u"
            i+=3
        }else{
            textoResultado += texto[i];
        }
        
    }
    return textoResultado;
}