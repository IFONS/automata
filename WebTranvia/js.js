$(document).ready(grafico, esperarClick, recorrido, ajaxPrueba);



/*funcion para cargar todas las funciones de la pagina en orden*/

function general()
{
    /*aqui iran todas las funciones*/
}

function comboBox()
{
    /*para algunas cosas con combobox, por si ocurre*/

}
/*funcion cuando carga la pagina, si es la primera vez, solo funcionara la var origen,
 pero si recargan la pagina parara en la siguiente parada, e iniciara origen*/
function origen()
{
    /*en construccion*/
    emerg=true;
    origen=true;

}

function recorrido()
{
    posicion=0;
    if(posicion===0)
    {
        $("#parada0").html('<img src="imgs/red-button-1426817_960_720.png" width="10px" height="10px"/>');
    }
    else if(posicion==1)
    {

    }
    else if(posicion==2)
    {

    }
    else if(posicion==3)
    {

    }
    else if(posicion==4)
    {

    }
    else if(posicion==5)
    {

    }
    else if(posicion==6)
    {

    }
    else if(posicion==7)
    {

    }
    else if(posicion==8)
    {

    }
    else if(posicion==9)
    {

    }
    else if(posicion==10)
    {

    }


}

function ajaxPrueba()
{
    $.ajaxSetup({ cache: false });
    setInterval
    (
        function()
        {
            $.get("leer_variable.html", function(result)
            {
                $('#etiqueta').text(result.trim());
            }
            );
        },1000
    );
}

function grafico()
{

    /*recordatorio meter tamaños por variables*/
    var pieData = [{value:90,color:"#0b82e7",highlight: "#0c62ab",label: "Primer dato"},
        {value:60,color:"#0ce73f",highlight: "#ab3021",label: "Segundo dato"}];
    var ctx = document.getElementById("chart-area").getContext("2d");
    window.myPie = new Chart(ctx).Doughnut(pieData);
    

}
/*Funciones para cambiar el contenido de la página dependiendo del boton de menu clickado*/

function esperarClick()
{
    $("#botonMenu1").click(menuBotonUnoClick,grafico);
    $("#botonMenu2").click(menuBotonDosClick);
    $("#botonMenu3").click(menuBotonTresClick);
    $("#botonMenu4").click(menuBotonCuatroClick);

}


function menuBotonUnoClick()
{
    /*No se si se usara
    *
    *
    *
    *
    *
    *
    *
    * */
}

function menuBotonDosClick()
{   /*admin*/
    $("#right").html('<h2>Info Pagina DOS</h2><p> </p> ');
    $("#contenido").html
    ('<div id="adm">' +
        '   <div id="dest">' +
        '       <label for="seleccionDestino">Seleccione destino:</label>' +
        '       <select id="seleccionDestino" class="selectAdmin">' +
        '           <option class="opcionesDestino" id="opcionDestino0" value="0"></option>' +
        '           <option class="opcionesDestino" id="opcionesDestino1" value="1">Destino1</option>' +
        '           <option class="opcionesDestino" id="opcionesDestino2" value="2">Destino2</option>' +
        '           <option class="opcionesDestino" id="opcionesDestino3" value="3">Destino3</option>' +
        '       </select>' +
        '   </div>' +
        '   <div class="botones" id="botones">' +
        '       <label for="marcha"></label>' +
        '       <input type="submit" id="marcha" class="botones" value="MARCHA"/>' +
        '       <label for="anulacion"></label>' +
        '       <input type="submit" id="anulacion" class="botones" value="ANULACION"/>' +
        '       <label for="paro"></label>' +
        '       <input type="submit" id="paro" class="botones" value="PARO"/>' +
        '   </div> ' +
        '</div>');
}

function menuBotonTresClick()
{
    $("#contenido").html('<h2>¿Imprimir datos?</h2><p> </p> '+
        '<div id="informe">\n' +
        '    ' +
        '</div>'
       );
    $("#right").html('<h2>Info Pagina TRES</h2><p> </p> ');

}


function menuBotonCuatroClick()
{
    $("#contenido").html
    (
        '<div id="formu">'+
        '<!--FORMULARIO DE CONTACTO-->\n' +
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
        '            <div id="botones">' +
        '                <label for="enviar"></label>' +
        '                <input type="submit" id="enviar" class="botones" value="ENVIAR">'+
        '                <label for="limpiar"></label>'+
        '                <input type="reset" id="limpiar" class="botones" value="LIMPIAR FORMULARIO">' +
        '            </div>\n' +
        '        </form>' +
        '</div>'
    );
    $("#right").html('<h2>Quienes somos, y nuestras redes </h2><p> </p> ');
}

/*Funciones para recoger datos del automata*/



/*Funciones para insertar datos a el automata*/