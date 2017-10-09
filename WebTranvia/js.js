/**Aquí se llama a una lista de funciones que se ejecutan al cargar la pagina*/
$(document).ready(general);
posicion=0;
/**funcion para cargar todas las funciones de la pagina en orden*/
function general()
{
    //grafico();
    esperarClick();
    //recorrido();
}



/**Funciona para cambiar la imagen de la parada dependiendo de la parada actual del automata*/
/*
function recorrido(posicion)
{
    if(posicion==0)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada0").css('background-image', 'url(imgs/verde.png)');
        $( "#car" ).animate({
            marginLeft: "0%",
        }, 1500 );
    }
    else if(posicion==1)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada1").css('background-image', 'url(imgs/verde.png)');
        $( "#car" ).animate({
            marginLeft: "5%",
        }, 1500 );
    }
    else if(posicion==2)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada2").css('background-image', 'url(imgs/verde.png)');
        $( "#car" ).animate({
            marginLeft: "10%",
        }, 1500 );
    }
    else if(posicion==3)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada3").css('background-image', 'url(imgs/verde.png)');
        $( "#car" ).animate({
            marginLeft: "15%",
        }, 1500 );
    }
    else if(posicion==4)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada4").css('background-image', 'url(imgs/verde.png)');
        $( "#car" ).animate({
            marginLeft: "20%",
        }, 1500 );
    }
    else if(posicion==5)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada5").css('background-image', 'url(imgs/verde.png)');
        $( "#car" ).animate({
            marginLeft: "25%",
        }, 1500 );
    }
    else if(posicion==6)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada6").css('background-image', 'url(imgs/verde.png)');
        $( "#car" ).animate({
            marginLeft: "30%",
        }, 1500 );

    }
    else if(posicion==7)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada7").css('background-image', 'url(imgs/verde.png)');
        $( "#car" ).animate({
            marginLeft: "35%",
        }, 1500 );
    }
    else if(posicion==8)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada8").css('background-image', 'url(imgs/verde.png)');
        $( "#car" ).animate({
            marginLeft: "40%",
        }, 1500 );
    }
    else if(posicion==9)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada9").css('background-image', 'url(imgs/verde.png)');
        $( "#car" ).animate({
            marginLeft: "45%",
        }, 1500 );
    }
    else if(posicion==10)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada10").css('background-image', 'url(imgs/verde.png)');
        $( "#car" ).animate({
            marginLeft: "50%",
        }, 1500 );
    }
}
*/
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
    //$("#formManual").submit(cambiarPosicion);
}/*
function cambiarPosicion(){
    posicion= $( "#seleccionDestino option:selected" ).val();
}*/
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

/*Funcion en desarrollo que mostraria, al hacer click en el boton de imprimir datos, un pequenio formulario
para que el trabajador introduzca su nombre y apellidos y puesto o cargo: estos datos aparecerian en el informe
junto a posicion y velocidad*/
function menuBotonTresClick()
{
    /*$("#contenido").html('<h3>Indique sus datos y pulse \'Informe\':</h3>\n' +
     '<form id="datosParaInforme" method="post">\n' +
     '   <div id="dts">\n' +
     '       <label for="nt">Nombre y apellidos (*)</label>\n' +
     '       <input type="text" id="nt" class="datosInforme">\n' +
     '       <br>\n' +
     '       <label for="pct">Puesto o cargo (*)</label>\n' +
     '       <input type="tetx" id="pct" class="datosInforme">\n' +
     '       <br>\n' +
     '       (*) Campos obligatorios\n' +
     '   <!--DIV VACIO PARA MOSTRAR LOS ERRORES AL VALIDAR EL FORMULARIO-->\n' +
     '   <div id="mensErrorImprimir">\n' +
     '   </div>\n' +
     '   </div>\n<div id="botnsInforme">\n' +
     '       <label for="si"></label>\n' +
     '       <input type="button" id="si" class="menuitem" value="informe" onclick="generarInforme()" disabled>\n' +
     '       <label for="ci"></label>\n' +
     '       <input type="button" id="ci" class="menuitem" value="cancelar" onclick="location.replace(\'index.html\')">\n' +
     '   </div>\n' +
     '</form>'
     );
     validarDatosInforme();
     $("#right").html('  <h2>En tiempo real:</h2>'+
     '                   <div id="destinoTranv">'+
     '                   <label for="destino">Proximo destino:</label>'+
     '                   <input type="text" id="destino" class="asideText" value=\':="daw".posA:\'>'+
     '               </div>'+
     '               <div id="botones">'+
     '                           <form id="formOrigen">'+
     '                               <input type="text" id="origenInputText" name=\'"daw".origen\' class="botones" value="true"'+
     '                               <p style="clear: both">Ir a la posición origen:</p>'+
     '                               <input type="submit" id="origen" class="menuitem" value="origen"/>'+
     '                           </form>'+
     '                       </div>'+
     '                       <div id="mensajeBusqueda0">'+
     '                       </div>');*/

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
        '        <form id="formCont" action= "mailto:none.com.2017@gmail.com?subject=asunto" enctype ="text/plain" method="post"><!-- metodo de envio y el action-->\n' +
        '            <div id="datosForm">\n' +
        '                <label for="nombre">nombre y apellidos (*)</label>\n' +
        '                <input type="text" id="nombre" class="campoText" placeholder="Nombre y apellidos">\n' +
        '                <br>\n' +
        '                <label for="puesto">puesto o cargo (*)</label>\n' +
        '                <input type="text" id="puesto" class="campoText" placeholder="Puesto o cargo">\n' +
        '                <br>\n' +
        '                <label for="asunto">asunto</label>\n' +
        '                <input type="text" id="asunto" class="campoText" placeholder="Asunto">\n' +
        '                <br>\n' +
        '                <label for="mensaje">mensaje (*)</label>\n' +
        '                <textarea id="mensaje" placeholder="Escriba aquí su mensaje" class="campoText"></textarea>\n' +
        '            </div>\n' +
        '            <div id="obligatorio">(*) Campos obligatorios</div>\n' +
        '            <!--DIV VACIO PARA MOSTRAR LOS ERRORES AL VALIDAR EL FORMULARIO-->\n' +
        '            <div id="mensError">\n' +
        '            </div>\n' +
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

/**Función para validar los campos del formulario
 Antes de enviarlos al servidor, se validarán los datos introducidos y después se enviará el correo*/
function validarFormulario() {
    var ok1 = false;
    var ok2 = false;
    var ok3 = false;

    $("#enviar").prop("disabled", true);
    $("#nombre").blur(
        function () {
            if ($("#nombre").val() == "") {
                $("#mensError").css("visibility", "visible");
                document.getElementById("mensError").innerHTML = "El campo 'Nombre y apellidos' es obligatorio.";
                $("#nombre").css("background-color", "#eb2910");
                ok1 = false;
            }
            else {
                if (!$(this).val().match(/^[A-Za-z]+/)) {
                    $("#mensError").css("visibility", "visible");
                    document.getElementById("mensError").innerHTML = "El campo 'Nombre y apellidos' no puede contener números.";
                    $("#nombre").css("background-color", "#eb2910");
                    ok1 = false;
                }
                else {
                    ok1 = true;
                    $("#mensError").css("visibility", "hidden");
                    $("#nombre").prop("disabled", true);

                    $("#puesto").blur(
                        function () {
                            if ($("#puesto").val() == "") {
                                $("#mensError").css("visibility", "visible");
                                document.getElementById("mensError").innerHTML = "El campo 'Puesto o cargo' es obligatorio.";
                                $("#puesto").css("background-color", "#eb2910");
                                ok2 = false;
                            }
                            else {
                                ok2 = true;
                                $("#mensError").css("visibility", "hidden");
                                $("#puesto").prop("disabled", true);

                                $("#mensaje").mouseleave(
                                    function () {
                                        if ($("#mensaje").val() == "") {
                                            $("#mensError").css("visibility", "visible");
                                            document.getElementById("mensError").innerHTML = "El campo 'Mensaje' es obligatorio.";
                                            $("#mensaje").css("background-color", "#eb2910");
                                            ok3 = false;
                                        }
                                        else {
                                            ok3 = true;
                                            $("#mensaje").prop("disabled", true);
                                            $("#mensError").css("visibility", "hidden");
                                            $("#enviar").prop("disabled", false);
                                        }
                                    }
                                )
                            }
                        }
                    )
                }
            }
            $("#nombre").click(
                function () {
                    $(this).val("");
                    $(this).css("background-color", "#fff");
                }
            )
            $("#puesto").click(
                function () {
                    $(this).val("");
                    $(this).css("background-color", "#fff");
                }
            )
            $("#mensaje").click(
                function () {
                    $(this).val("");
                    $(this).css("background-color", "#fff");
                }
            )
        }
    )
    $("#enviar").click(
        function () {
            if(ok1 && ok2 && ok3) {
                /*EL MENSAJE EN SI SE ENVIA DESDE LA ETIQUETA FORM EN EL HTML*/
                $("#contenido").html(
                    '<div id="divContactoOk">' +
                    '<p id="mensEnvioOk">Su mensaje se ha enviado correctamente.' +
                    '<br>' +
                    'Enseguida recibirá una respuesta.' +
                    '</p>' +
                    '<br>' +
                    '<input type="button" id="botonFormOk" class="menuitem" value="ACEPTAR" onclick="location.replace(\'index.html\')">'+
                    '</div>'
                )
            }
        }
    )
}

/*Funcion para validar los datos introducidos en 'Imprimir Datos' y mostrar en informe en imprimir.html (en desarrollo)*/
/*function validarDatosInforme() {
    var ok1 = false;
    var ok2 = false;

    $("#nt").blur(
        function () {
            if ($(this).val() == "") {
                $("#mensErrorImprimir").css("visibility", "visible");
                document.getElementById("mensErrorImprimir").innerHTML = "El campo 'Nombre y apellidos' es obligatorio.";
                $("#nt").css("background-color", "#eb2910");
                ok1 = false;
            }
            else {
                if (!$(this).val().match(/^[A-Za-z]+/)) {
                    $("#mensErrorImprimir").css("visibility", "visible");
                    document.getElementById("mensErrorImprimir").innerHTML = "El campo 'Nombre y apellidos' no puede contener números.";
                    $("#nt").css("background-color", "#eb2910");
                    ok1 = false;
                }
                else {
                    ok1 = true;
                    $("#mensErrorImprimir").css("visibility", "hidden");
                    $("#nt").prop("disabled", true);

                    $("#pct").mouseleave(
                        function () {
                            if ($(this).val() == "") {
                                $("#mensErrorImprimir").css("visibility", "visible");
                                document.getElementById("mensErrorImprimir").innerHTML = "El campo 'Puesto o cargo' es obligatorio.";
                                $("#pct").css("background-color", "#eb2910");
                                ok2 = false;
                            }
                            else {
                                ok2 = true;
                                $("#pct").prop("disabled", true);
                                $("#mensErrorImprimir").css("visibility", "hidden");
                                $("#si").prop("disabled", false);
                            }
                        }
                    )
                }
            }
            $("#nt").click(
                function () {
                    $(this).val("");
                    $(this).css("background-color", "#fff");
                }
            )
            $("#pct").click(
                function () {
                    $(this).val("");
                    $(this).css("background-color", "#fff");
                }
            )


        }

    )

    $("#si").click(
     function () {
     if(ok1 && ok2) {
     SI OK, SE MANDA A IMPRIMIR.HTML

     var nombreApellidos = $("#nt").val();
     var puestoCargo = $("#pct").val();


     location.replace("imprimir.html?var1=nombreApellidos&var2=puestoCargo");

     location.replace("imprimir.html?var1=");

     document.getElementById("na").innerHTML = "nombreApellidos";
     document.getElementById("pc").innerHTML = "puestoCargo";

     generarInforme(nombreApellidos, puestoCargo);
     }
     }
     )
}*/

/*SE GENERA EL INFORME A IMPRIMIR CON LOS DATOS INTRODUCIDOS POR EL TRABAJADOR*/
/*function generarInforme(var1, var2) {
 location.replace("imprimir.html");


 var nombreApellidos = $("#nt").val();
 var puestoCargo = $("#pct").val();
 alert($("#nt").val());
 alert(var1);
 alert(puestoCargo);

 location.replace("imprimir.html?var1=nombreApellidos&var2=puestoCargo");
 }*/

/*Funcion que genera el imforme a imprimir con los datos introducidos por el trabajador (en desarrollo)*/
/*function generarInforme() {
    var nombreApellidos = $("#nt").val();
    var puestoCargo = $("#pct").val();
    alert("hola - " + $("#nt").val());

    location.replace("imprimir.html");
    window.onload = llenarInforme(nombreApellidos, puestoCargo);

}*/

/*Funcion llamada desde imprimir.html que generaria la tabla de datos desde aqui (javascript) (en desarrollo)*/
/*function llenarInforme(nombreAps, puestoCar) {

    $("#container").html(
        '<h3>La última instrucción introducida ha sido:</h3>\n' +
        '<table id="tablaInforme">\n' +
        '   <tr>\n' +
        '       <th>Posición:</th>\n' +
        '       <td>:="daw".posA:</td>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '       <th>Velocidad:</th>\n' +
        '       <td>Constante</td>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '       <th>Trabajador:</th>\n' +
        '       <td id="na"></td>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '       <th>Puesto o cargo:</th>\n' +
        '       <td id="pc"></td>\n' +
        '   </tr>\n' +
        '</table>'
    );

    document.getElementById("na").innerHTML = nombreAps;
    document.getElementById("pc").innerHTML = puestoCar;
}*/

/*Lo mismo que la anterior, otro intento de otra manera (en desarrollo)*/
/*function llenarInforme () {

 document.getElementById("na").innerHTML = nombreAps;
 document.getElementById("pc").innerHTML = puestoCar;
 }*/


