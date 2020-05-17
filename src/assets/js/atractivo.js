

function ConfiguracionInicialAtractivo() {

    GetCurrentDate();//Obtener la fecha actual, y colocarla en el input date
}

function GetCurrentDate() {
    var month = (new Date().getMonth() + 1) < 10 ? "0" + (new Date().getMonth() + 1) : (new Date().getMonth() + 1);
    var day = new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate();
    var today = new Date().getFullYear() + '-' + month + '-' + day;
    $("#fecha").val(today);
}


function OpenAtractivos() {
    var section = '#sec1';
    $("section").addClass("ocultoS");
    $("section.ocultoS").hide("slow");
    $(section).show("slow");


    //Cuando se carga la primera vez, que no salgan los tipos y subtipos
    $("div.ocultoC").hide();//Los tipos
    $("div.ocultoT").hide();//Los subtipos

    //deschequear los radios
    $("input[type='radio']").prop("checked", false);

    //deschequear los checkboxes
    $("input[type='checkbox']").prop("checked", false);

    //Poner el scroll en el top desde jquery
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

function MoveToSectionAtractivo(section) {
    //var section = '#' + $(this).attr('fragment');
    $("section").addClass("ocultoS");
    $("section.ocultoS").hide("slow");
    $(section).show("slow");

    //Poner el scroll en el top desde jquery
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

function MoveToCategorieAtractivo(categoria) {
    //var categoria = $(this).val();
    $("div.ocultoC").hide("slow");
    $("div.ocultoT").hide("slow");
    $("#c" + categoria).show("slow");
}

function MoveToTipeAtractivo(tipo) {
    $("div.ocultoT").hide("slow");
    $("#t" + tipo).show("slow");
}