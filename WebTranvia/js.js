$(document).ready(esperarClick);
$(document).ready(grafico);

function comboBox()
{


}

function grafico()
{
    /*recordatorio meter tamaños por variables*/
    var pieData = [{value:90,color:"#0b82e7",highlight: "#0c62ab",label: "Primer dato"},
        {value:60,color:"#0b82e7",highlight: "#0c62ab",label: "Segundo dato"}];
    var ctx = document.getElementById("chart-area").getContext("2d");
    window.myPie = new Chart(ctx).Doughnut(pieData);
}
/*Funciones para cambiar el contenido de la página dependiendo del boton de menu clickado*/
function esperarClick()
{
    $("#botonMenu1").click(menuBotonUnoClick);
    $("#botonMenu1").click(grafico);
    $("#botonMenu2").click(menuBotonDosClick);
    $("#botonMenu3").click(menuBotonTresClick);
    $("#botonMenu4").click(menuBotonCuatroClick);

};


function menuBotonUnoClick()
{
    $("#contenido").html('<h2>Aqui va la información del tranvia</h2>' +
        '<p>La posicion en la que se encuentra,velocidad, dirección.... ' +
        '<div id="canvas-holder">\n' +
        '\n' +
        '<canvas id="chart-area">' +
        '</canvas>\n' +
        '</div>' +
        '</p> ');
    $("#right").html('<h2>Info Pagina UNO</h2><p> </p> ');
};

function menuBotonDosClick()
{
    $("#right").html('<h2>Info Pagina DOS</h2><p> </p> ');
};

function menuBotonTresClick()
{
    $("#contenido").html('<h2>¿Imprimir datos?</h2><p> </p> ');
    $("#right").html('<h2>Info Pagina TRES</h2><p> </p> ');
};

function menuBotonCuatroClick()
{
    $("#contenido").html('<h2>Contacto</h2><p> </p> ');
    $("#right").html('<h2>Quienes somos, y nuestros correos/contatos</h2><p> </p> ');
};

/*Funciones para recoger datos del automata*/



/*Funciones para insertar datos a el automata*/