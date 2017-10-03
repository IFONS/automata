$(document).ready(grafico, esperarClick, ajaxPrueba);
/*Funciones para cambiar el contenido de la página dependiendo del boton de menu clickado*/
/*function esperarClick()
 {
    $("#botonMenu1").click(menuBotonUnoClick());
    $("#botonMenu2").click(menuBotonDosClick());
    $("#botonMenu3").click(menuBotonTresClick());
    $("#botonMenu4").click(menuBotonCuatroClick());
};*/

function comboBox()
{


}



function ajaxPrueba()
{
    $.ajaxSetup({ cache: false });
    setInterval(function() {
        $.get("leer_variable.html", function(result){
            $('#etiqueta').text(result.trim());
        });
    },1000);
};

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
    $("#contenido").html('<div id="dest">\n' +
        '                <label for="seleccionDestino">seleccione destino:</label>\n' +
        '                <select id="seleccionDestino" class="selectAdmin">\n' +
        '                    <option class="opcionesDestino" id="opcionDestino0"></option>\n' +
        '                    <option class="opcionesDestino" id="opcionDestino1">Destino 1</option>\n' +
        '                    <option class="opcionesDestino" id="opcionDestino2">Destino 2</option>\n' +
        '                    <option class="opcionesDestino" id="opcionDestino3">Destino 3</option>\n' +
        '                </select>\n' +
        '            </div>\n' +
        '            <!--SEGUNDO DIV Y SELECT PARA ELEGIR EL DESTINO-->\n' +
        '            <div id="vel">\n' +
        '                <label for="velocidad">seleccione destino:</label>\n' +
        '                <select id="velocidad" class="selectAdmin">\n' +
        '                    <option class="opcionesVelocidad" id="opcionVelocidad0"></option>\n' +
        '                    <option class="opcionesVelocidad" id="opcionVelocidad1">Velocidad 1</option>\n' +
        '                    <option class="opcionesVelocidad" id="opcionVelocidad2">Velocidad 2</option>\n' +
        '                    <option class="opcionesVelocidad" id="opcionVelocidad3">Velocidad 3</option>\n' +
        '                </select>\n' +
        '            </div>\n' +
        '            <!--PRIMER DIV BOTONES PARO (SUBMIT) Y ANULACION (RESET)-->\n' +
        '            <div class="botones">\n' +
        '                <label for="marcha"></label>\n' +
        '                <input type="submit" id="marcha" class="botones" value="PONER EN MARCHA">\n' +
        '                <!--ira a una funcion para resetear los select, si no, se quita-->\n' +
        '                <label for="anulacion"></label>\n' +
        '                <input type="submit" id="anulacion" class="botones" value="ANULAR ÓRDENES">\n' +
        '                <label for="paro"></label>\n' +
        '                <input type="submit" id="paro" class="botones" value="PARO DE EMERGENCIA">\n' +
        '            </div>');
    $("#right").html('<h2>Info Pagina DOS</h2><p> </p> ');
};

function menuBotonTresClick()
{
    $("#contenido").html('<h2>¿Imprimir datos?</h2><p> </p> ');
    $("#right").html('<h2>Info Pagina TRES</h2><p> </p> ');
};

function menuBotonCuatroClick()
{
    $("#contenido").html('<!--FORMULARIO DE CONTACTO-->\n' +
        '        <h3>Para ponerse en contacto con nosotros rellene el siguiente formulario:</h3>\n' +
        '        <!--SECCION DE RECOGIDA DATOS-->\n' +
        '        <form id="formCont" method="post"><!-- metodo de envio y el action-->\n' +
        '            <div id="datosForm">\n' +
        '                <label for="nombre">nombre (*)</label>\n' +
        '                <input type="text" id="nombre" class="campoText" placeholder="Nombre" required>\n' +
        '                <br>\n' +
        '                <label for="apellidos">apellidos (*)</label>\n' +
        '                <input type="text" id="apellidos" class="campoText" placeholder="Apellidos" required>\n' +
        '                <br>\n' +
        '                <label for="asunto">asunto</label>\n' +
        '                <input type="text" id="asunto" class="campoText" placeholder="Asunto">\n' +
        '                <br>\n' +
        '                <label for="mensaje">mensaje (*)</label>\n' +
        '                <textarea id="mensaje" placeholder="Escriba aquí su mensaje" class="campoText"></textarea>\n' +
        '            </div>\n' +
        '            <div id="obligatorio">(*) Campos obligatorios</div>\n' +
        '            <!--BOTONES DEL FORMULARIO-->\n' +
        '            <div id="botones">\n' +
        '                <label for="enviar"></label>\n' +
        '                <input type="submit" id="enviar" class="botones" value="ENVIAR">\n' +
        '                <label for="limpiar"></label>\n' +
        '                <input type="reset" id="limpiar" class="botones" value="LIMPIAR FORMULARIO">\n' +
        '            </div>\n' +
        '        </form>');
    $("#right").html('<h2>Quienes somos, y nuestros correos/contatos</h2><p> </p> ');
};

/*Funciones para recoger datos del automata*/



/*Funciones para insertar datos a el automata*/