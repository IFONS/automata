/**Aquí se llama a una lista de funciones que se ejecutan al cargar la pagina*/
$(document).ready(general);
posicion=0;
/**funcion para cargar todas las funciones de la pagina en orden*/
function general()
{
    //grafico(); //Sin usar, no tenemos datos para poder usarlo
    esperarClick();
}



/**Funciona para cambiar la imagen de la parada dependiendo de la parada actual del automata*/


function recorrido(posicion)
{

    if(posicion==0)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada0").css('background-image', 'url(imgs/verde.png)');
    }
    else if(posicion==1)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada1").css('background-image', 'url(imgs/verde.png)');
        $.keyframe.define([{
            name: 'tranvia1',
            '0%': {
                'transform': 'translate(0%)'
            },
            '100%': {
                'transform': 'translate(10%)'
            }
        }]);
        $("#car").playKeyframe({
            name: 'tranvia1',
            duration: '3s',
            timingFunction: 'linear',
            fillMode: 'forwards',
        });
    }
    else if(posicion==2)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada2").css('background-image', 'url(imgs/verde.png)');
        $.keyframe.define([{
            name: 'tranvia2',
            '0%': {
                'transform': 'translate(0%)'
            },
            '100%': {
                'transform': 'translate(20%)'
            }
        }]);
        $("#car").playKeyframe({
            name: 'tranvia2',
            duration: '3s',
            timingFunction: 'linear',
            fillMode: 'forwards',
        });
    }
    else if(posicion==3)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada3").css('background-image', 'url(imgs/verde.png)');
        $.keyframe.define([{
            name: 'tranvia3',
            '0%': {
                'transform': 'translate(0%)'
            },
            '100%': {
                'transform': 'translate(30%)'
            }
        }]);
        $("#car").playKeyframe({
            name: 'tranvia3',
            duration: '3s',
            timingFunction: 'linear',
            fillMode: 'forwards',
        });
    }
    else if(posicion==4)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada4").css('background-image', 'url(imgs/verde.png)');
        $.keyframe.define([{
            name: 'tranvia4',
            '0%': {
                'transform': 'translate(0%)'
            },
            '100%': {
                'transform': 'translate(40%)'
            }
        }]);
        $("#car").playKeyframe({
            name: 'tranvia4',
            duration: '3s',
            timingFunction: 'linear',
            fillMode: 'forwards',
        });
    }
    else if(posicion==5)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada5").css('background-image', 'url(imgs/verde.png)');
        $.keyframe.define([{
            name: 'tranvia5',
            '0%': {
                'transform': 'translate(0%)'
            },
            '100%': {
                'transform': 'translate(50%)'
            }
        }]);
        $("#car").playKeyframe({
            name: 'tranvia5',
            duration: '3s',
            timingFunction: 'linear',
            fillMode: 'forwards',
        });
    }
    else if(posicion==6)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada6").css('background-image', 'url(imgs/verde.png)');
        $.keyframe.define([{
            name: 'tranvia6',
            '0%': {
                'transform': 'translate(0%)'
            },
            '100%': {
                'transform': 'translate(60%)'
            }
        }]);
        $("#car").playKeyframe({
            name: 'tranvia6',
            duration: '3s',
            timingFunction: 'linear',
            fillMode: 'forwards',
        });
    }
    else if(posicion==7)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada7").css('background-image', 'url(imgs/verde.png)');
        $.keyframe.define([{
            name: 'tranvia7',
            '0%': {
                'transform': 'translate(0%)'
            },
            '100%': {
                'transform': 'translate(70%)'
            }
        }]);
        $("#car").playKeyframe({
            name: 'tranvia7',
            duration: '3s',
            timingFunction: 'linear',
            fillMode: 'forwards',
        });
    }
    else if(posicion==8)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada8").css('background-image', 'url(imgs/verde.png)');
        $.keyframe.define([{
            name: 'tranvia8',
            '0%': {
                'transform': 'translate(0%)'
            },
            '100%': {
                'transform': 'translate(80%)'
            }
        }]);
        $("#car").playKeyframe({
            name: 'tranvia8',
            duration: '3s',
            timingFunction: 'linear',
            fillMode: 'forwards',
        });
    }
    else if(posicion==9)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada9").css('background-image', 'url(imgs/verde.png)');
        $.keyframe.define([{
            name: 'tranvia9',
            '0%': {
                'transform': 'translate(0%)'
            },
            '100%': {
                'transform': 'translate(90%)'
            }
        }]);
        $("#car").playKeyframe({
            name: 'tranvia9',
            duration: '3s',
            timingFunction: 'linear',
            fillMode: 'forwards',
        });
    }
    else if(posicion==10)
    {
        $(".paradas").css('background-image', 'url(imgs/botc3b3n_rojo-svg.png)');
        $("#parada10").css('background-image', 'url(imgs/verde.png)');
        $.keyframe.define([{
            name: 'tranvia10',
            '0%': {
                'transform': 'translate(0%)'
            },
            '100%': {
                'transform': 'translate(100%)'
            }
        }]);
        $("#car").playKeyframe({
            name: 'tranvia10',
            duration: '3s',
            timingFunction: 'linear',
            fillMode: 'forwards',
        });
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
    $("#botonMenu1").click(menuBotonUnoClick);
    $("#botonMenu2").click(menuBotonDosClick);
    $("#botonMenu4").click(menuBotonCuatroClick);
    //$("#formManual").submit(cambiarPosicion);
}
function menuBotonUnoClick()
{   /*Oculta los divs que no nos interesa mostrar y muestro el que queremos*/
    $("#right").show();
    $("#recorrido").show();
    $("#adm").hide();
    $("#divFormulario").hide();
    $("#contenedorParadas").show();
}
    /**Funcion que escribe en el index un codigo HTML al darle al boton de Administrar, donde hay un formulario que envia los datos a el automata*/
function menuBotonDosClick()
{   /*Oculta los divs que no nos interesa mostrar y muestro el que queremos*/
    $("#right").hide()
    $("#contenedorParadas").hide();
    $("#recorrido").hide();
    $("#adm").show();
    $("#formu").hide();

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



/**Funcion  que escribe en el html el codigo que se vera cuando se haga click en el boton de contacto*/
function menuBotonCuatroClick()
{   /*Oculta los divs que no nos interesa mostrar y muestro el que queremos*/
    $("#adm").hide()
    $("#contenedorParadas").hide()
    $("#recorrido").hide()
    $("#divFormulario").html
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
    $("#right").show()
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
    /*Comprueba que los campos obligatorios son introducidos*/
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
            $("#limpiar").click(
                function () {
                    $("#nombre").prop("disabled", false);
                    $("#puesto").prop("disabled", false);
                    $("#mensaje").prop("disabled", false);
                    $("#enviar").prop("disabled", true);
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