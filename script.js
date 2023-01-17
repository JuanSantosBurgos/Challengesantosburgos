/*e -->enter
o -->ober 
i -->imes
a -->ai 
u -->ufat*/

function encriptar(){
    var texto=document.getElementById("inputexto").value.toLowerCase();
    //i es para que afecte mayúsculas y minúsculas
    //g para toda la linea u oración
    //m para que afecte todas las lineas o parrafos
    var txtcifrado=texto.replace(/e/igm,"enter");
    var txtcifrado=txtcifrado.replace(/o/igm,"ober");
    var txtcifrado=txtcifrado.replace(/i/igm,"imes");
    var txtcifrado=txtcifrado.replace(/a/igm,"ai");
    var txtcifrado=txtcifrado.replace(/u/igm,"ufat");

    document.getElementById("textoencriptado").style.background="none";
    document.getElementById("textoencriptado").innerHTML=txtcifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
}
function desencriptar(){
    var texto=document.getElementById("inputexto").value.toLowerCase();
    //i es para que afecte mayúsculas y minúsculas
    //g para toda la linea u oración
    //m para que afecte todas las lineas o parrafos

    var txtcifrado=texto.replace(/enter/igm,"e");
    var txtcifrado=txtcifrado.replace(/ober/igm,"o");
    var txtcifrado=txtcifrado.replace(/imes/igm,"i");
    var txtcifrado=txtcifrado.replace(/ai/igm,"a");
    var txtcifrado=txtcifrado.replace(/ufat/igm,"u");

   
    document.getElementById("textoencriptado").innerHTML=txtcifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
}
function copy(){
    var contenido = document.querySelector("#textoencriptado");
    contenido.select();
    document.execCommand("copy");
    alert("copiado");

}