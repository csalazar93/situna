//Esta es una manera de agregar JQuery en Angular, ver si se puede agregar como archivo externo
// Ver esta manera mañana https://www.truecodex.com/course/angular-6/how-to-use-external-js-files-and-javascript-code-in-angular
//Eligir elementos que no contengan "x" selector: https://www.w3schools.com/jquery/sel_not.asp

$(document).ready(function () {
    $("#menuPrincipal a:not(.dropdown-toggle)").click(function () {
        $(".navbar-toggler").addClass("collapsed", true);
        $("#navbarSupportedContent").removeClass("show", 250);
    });
});
