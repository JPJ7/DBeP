var cui = document.getElementById('cui');
var clave = document.getElementById('clave');

function enviar(){
    console.log('enviando');

    if (!cui.value) {
        alert("Escriba su cui por favor");
        enviar = false;
        cui.focus();
    }
    if (!clave.value) {
        alert("Escriba su cui por favor");
        enviar = false;
        clave.focus();
    }
}