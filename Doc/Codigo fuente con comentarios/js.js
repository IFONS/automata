/**Aquí se llama a una lista de funciones que se ejecutan al cargar la pagina*/
$(document).ready(general);

/**funcion para cargar todas las funciones de la pagina en orden*/
function general()
{
    //grafico();
    esperarClick();
    recorrido();
}



/**Funciona para cambiar la imagen de la parada dependiendo de la parada actual del automata*/

function recorrido()
{
    var posicion=7;
    if(posicion==0)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada0").css('background-image', 'url(imgs/verde.png)');
        $("#car").css('left','0%');

    }
    else if(posicion==1)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada1").css('background-image', 'url(imgs/verde.png)');
        $("#car").css('left','10%');
    }
    else if(posicion==2)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada2").css('background-image', 'url(imgs/verde.png)');
        $("#car").css('left','20%');
    }
    else if(posicion==3)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada3").css('background-image', 'url(imgs/verde.png)');
        $("#car").css('left','30%');
    }
    else if(posicion==4)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada4").css('background-image', 'url(imgs/verde.png)');
        $("#car").css('left','40%');
    }
    else if(posicion==5)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada5").css('background-image', 'url(imgs/verde.png)');
        $("#car").css('left','50%');
    }
    else if(posicion==6)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada6").css('background-image', 'url(imgs/verde.png)');
        $("#car").css('left','60%');

    }
    else if(posicion==7)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada7").css('background-image', 'url(imgs/verde.png)');
        $("#car").css('left','70%');
    }
    else if(posicion==8)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada8").css('background-image', 'url(imgs/verde.png)');
        $("#car").css('left','80%');
    }
    else if(posicion==9)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada9").css('background-image', 'url(imgs/verde.png)');
        $("#car").css('left','90%');
    }
    else if(posicion==10)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada10").css('background-image', 'url(imgs/verde.png)');
        $("#car").css('left','100%');
    }
}

/**Prueba de ajax, sin usar en el proyecto*/
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

/**Funcion para la grafica(sin usar porque no tenemos datos del automata : velocidad,tiempo...)*/
/*
function grafico()
{
    var pieData = [{value:90,color:"#0b82e7",highlight: "#0c62ab",label: "Primer dato"},
        {value:60,color:"#0ce73f",highlight: "#ab3021",label: "Segundo dato"}];
    var ctx = document.getElementById("chart-area").getContext("2d");
    window.myPie = new Chart(ctx).Doughnut(pieData);
}
*/

/**Funciones para cambiar el contenido de la página dependiendo del boton de menu clickado*/
function esperarClick()
{
    $("#botonMenu2").click(menuBotonDosClick);
    $("#botonMenu3").click(menuBotonTresClick);
    $("#botonMenu4").click(menuBotonCuatroClick);
}

/**Funcion que escribe en el index un codigo HTML al darle al boton de Administrar, donde hay un formulario que envia los datos a el automata*/
function menuBotonDosClick()
{   /*admin*/
    $("#right").css('visibility', 'hidden');
    $("#contenedorParadas").hide();
    $("#recorrido").hide();
    $("#adm").show();

    /*$("#contenido").html
    (
        '<div id="adm">' +
        '                   <form id="formRadios" method="post">'+
    '                           <br><input id="radioManual" type="radio" name="radiosForm" value="Manual" checked="checked" onclick="activarDesactivarRadios()"//>'+
        '                       <label for="radioManual">Manual</label>' +
        '                       <input id="radioAutomatico" type="radio" name="radiosForm" value="Automatico" onclick="activarDesactivarRadios()"/>'+
        '                       <label for="radioAutomatico">Automatico</label>' +
    '                       </form>'+
        '                   <form  id="formManual" method="post">'+
        '                       <h2>Manual:</h2>'+
        '                       <label for="seleccionDestino" style="float:left">Destino:</label>\n' +
        '                       <select id="seleccionDestino" class="selectAdmin" name=\'"daw".posA\' style="float:left">\n' +
        '                           <option class="opcionesDestino" id="opcionDestino0" value="0">Parada origen</option>\n' +
        '                           <option class="opcionesDestino" id="opcionDestino1" value="1">Parada 1</option>\n' +
        '                           <option class="opcionesDestino" id="opcionDestino2" value="2">Parada 2</option>\n' +
        '                           <option class="opcionesDestino" id="opcionDestino3" value="3">Parada 3</option>\n' +
        '                           <option class="opcionesDestino" id="opcionDestino4" value="4">Parada 4</option>\n' +
        '                           <option class="opcionesDestino" id="opcionDestino5" value="5">Parada 5</option>\n' +
        '                           <option class="opcionesDestino" id="opcionDestino6" value="6">Parada 6</option>\n' +
        '                           <option class="opcionesDestino" id="opcionDestino7" value="7">Parada 7</option>\n' +
        '                           <option class="opcionesDestino" id="opcionDestino8" value="8">Parada 8</option>\n' +
        '                           <option class="opcionesDestino" id="opcionDestino9" value="9">Parada 9</option>\n' +
        '                           <option class="opcionesDestino" id="opcionDestino10" value="10">Parada 10</option>\n' +
        '                       </select><br><br>\n' +
        '					    <input name=\'"daw".movP\' class="movP" type="text" value="true"/>'+
        '       		        <label for="marcha"></label>' +
        '                       <input type="submit" id="marcha" class="menuitem" value="Puesta en marcha">' +
        '                   </form>'+
        '                       <br>'+
        '                   <form id="formAutomatico2" method="post">' +
        '                       <h2 style="clear:both;">Automatico</h2>'+
        '                       <input name=\'"daw".movP\' class="movP" type="text" value="false"/>'+
        '                       <input type="submit" id="marchaAuto" class="menuitem" value="Puesta en marcha" >' +
        '                   </form>'+
                '			<form id="formAutomatico" method="post">'+
                '				<input name=\'"daw".emerg\' class="movP" type="text" value="true"/>'+
                '				<label for="paro"></label>' +
                '               <input type="submit"id="paro" class="menuitem" value="Paro de emergencia" >' +
                '			</form>'+
        '</div>');*/



    activarDesactivarRadios();
}

/**Funcion que activa o desactiva un formulario o otro dependiendo del radio button seleccionado*/
function activarDesactivarRadios() {
    if($("#radioManual").is(':checked')) {
        $("#formAutomatico").attr('disabled','disabled');
        $("#paro").attr('disabled','disabled');
        $("#marchaAuto").attr('disabled','disabled');
        $("#formManual").removeAttr('disabled');
        $("#seleccionDestino").removeAttr('disabled');
        $("#marcha").removeAttr('disabled');
        $("#formAutomatico").css('color', '#aaaaaa');
        $("#formAutomatico2").css('color', '#aaaaaa');
        $("#formManual").css('color', 'black');
    } else {
        $("#formManual").attr('disabled','disabled');
        $("#marcha").attr('disabled','disabled');
        $("#formAutomatico").removeAttr('disabled');
        $("#seleccionDestino").attr('disabled','disabled');
        $("#paro").removeAttr('disabled');
        $("#marchaAuto").removeAttr('disabled');
        $("#formAutomatico").css('color', 'black');
        $("#formAutomatico2").css('color', 'black');
        $("#formManual").css('color', '#aaaaaa');
    }
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

/**Funcion  que escribe en el html el codigo que se vera cuando se haga click en el boton de contacto*/
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
        '                <input type="submit" id="enviar" class="menuitem" value="ENVIAR">'+
        '                <label for="limpiar"></label>'+
        '                <input type="reset" id="limpiar" class="menuitem" value="LIMPIAR FORMULARIO">' +
        '            </div>\n' +
        '        </form>' +
        '</div>'
    );
    validarFormulario();
    $("#right").html('<h2>Quienes somos, y nuestras redes </h2>' +
        '<br>' +
        '<p>Aplicación desarrollada por: </p>' +
        '<h3><strong>none.com</strong></h3>' +
        '<br>' +
        '<p><a href="https://es-es.facebook.com/" target="_blank" title="none Facebook"><img src="imgs/facebook-none.png" id="noneFacebook"></a><a href="https://twitter.com/?lang=es" target="_blank" title="none Twitter"><img src="imgs/twitter-none.png" id="noneTwitter"></a><a href="https://web.whatsapp.com/" target="_blank" title="none WhatsApp"><img src="imgs/whataspp-none.png" id="noneWhatsapp"></a></p> ');
}

function validarFormulario() {
    $("#nombre").blur(
        function () {

        }
    )

}
