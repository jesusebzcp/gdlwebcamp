var regalo = document.getElementById('regalo');
document.addEventListener('DOMContentLoaded', function() {
    /* datos de usuarios */
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var email = document.getElementById("email");

    /* campos pases */
    var pase_dia = document.getElementById("pase_dia");
    var pase_dosdias = document.getElementById("pase_dosdias");
    var pase_completo = document.getElementById("pase_completo");
    //botones y divs
    var calcular = document.getElementById('caulcular');
    var errorDiv = document.getElementById("error");
    var btonRegistro = document.getElementById("btnRegistro");
    var resultado = document.getElementById("lista-productos");
    //extras
    var etiquetas = document.getElementById('etiquetas');
    var camisas = document.getElementById('camisa_evento');
    console.log(camisas.value);








}); //DOM CONTEN LAODE

//calcualar
calcular.addEventListener('click', calcularMontos);

function calcularMontos(event) {
    event.preventDefault();
    if (regalo.value === '') {
        alert('DEBES ELEGIR UN REGALO');
        regalo.focus();
    } else {
        var boletoDia = pase_dia.value,
            boleto2Dias = pase_dosdias.value,
            boletoCompleto = pase_completo.value,
            camisasE = camisas,
            cantEtiquetas = etiquetas.value;

        var totalPagar = (boletoDia * 30) +
            (boleto2Dias * 45) +
            (boletoCompleto * 50) +
            ((camisasE * 10) * .93) +
            (cantEtiquetas * 2);


        console.log(totalPagar);



    }



}