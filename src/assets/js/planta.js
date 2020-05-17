
function ConfiguracionInicialPlanta() {
    GetCurrentDate();//Obtener la fecha actual, y colocarla en el input date
}

function GetCurrentDate() {
    var month = (new Date().getMonth() + 1) < 10 ? "0" + (new Date().getMonth() + 1) : (new Date().getMonth() + 1);
    var day = new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate();
    var today = new Date().getFullYear() + '-' + month + '-' + day;
    $("#fecha").val(today);
}

//Validar checkbox Mayor Cantidad
function ValidarCantidadCheckMayorIngresoMeses() {
    if ($("input[name='mesMayorIngreso']:checked").length < 3) {
        $("input[name='mesMayorIngreso']").attr("disabled", false);//Mantener todos los checkbox habilitados
    }
    else {
        $("input[name='mesMayorIngreso']:not(:checked)").attr("disabled", true);//Colocar el resto como deshabilitados
    }
}

//Validar checkbox Menor Cantidad
function ValidarCantidadCheckMenorIngresoMeses() {
    if ($("input[name='mesMenorIngreso']:checked").length < 3) {
        $("input[name='mesMenorIngreso']").attr("disabled", false);//Mantener todos los checkbox habilitados
    }
    else {
        $("input[name='mesMenorIngreso']:not(:checked)").attr("disabled", true);//Colocar el resto como deshabilitados
    }
}


function MoveToSectionPlanta(section) {
    //var section = '#' + $(this).attr('fragment');
    $("section").addClass("ocultoS");
    $("section.ocultoS").hide("slow");
    $(section).show("slow");

    //Poner el scroll en el top desde jquery
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

function MoveToCategoriePlanta(categoria, isChecked) {
    //var categoria = $(this).val();
    if (isChecked) {
        $("#c" + categoria).show("slow");
    }
    else {
        $("#c" + categoria).hide("slow");
    }
}

function MoverAPracticaAmigablePlanta(practica) {
    //var practica = $(this).val();
    if (practica == 0) {//se seleccionado NO, por lo cual no se muestra nada
        $("div.ocultoP").hide("slow");
    }
    else if (practica == 1) {
        $("div.ocultoP").show("slow");
    }
}


function MoveToOtraPracticaPlanta(opcionSeleccionada, isChecked) {
    //var opcionSeleccionada = $(this).val();
    if (opcionSeleccionada == 4) {//Si se selecciona la opcion OTRA de la pregunta 24
        if (isChecked) {
            $("textarea.ocultoOtra").show("slow");
        }
        else {
            $("textarea.ocultoOtra").hide("slow");
        }
    }
}

function OpenPlanta() {

    var section = '#sec1';
    $("section").addClass("ocultoS");
    $("section.ocultoS").hide("slow");
    $(section).show("slow");


    //Cuando se carga la primera vez, que no salgan los tipos y subtipos
    $("div.ocultoC").hide();//Los tipos
    $("div.ocultoP").hide();//Los practicas ambientales de la pregunta 24

    $(".ocultoOtra").hide();//la observacion de la opcion OTRO de la pregunta 24

    //deschequear los radios
    $("input[type='radio']").prop("checked", false);

    //deschequear los checkboxes
    $("input[type='checkbox']").prop("checked", false);

    //Poner el scroll en el top desde jquery
    $("html, body").animate({ scrollTop: 0 }, "slow");
}