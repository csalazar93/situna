//esta es una manera de agregar JQuery en angular, ver si se puede agregar como archivo externo
// Ver esta manera mañana https://www.truecodex.com/course/angular-6/how-to-use-external-js-files-and-javascript-code-in-angular
$(document).ready(function () {
    $("#menuPrincipal a").click(function () {
        //$(".navbar-toggler").addClass("collapsed");
        $("#navbarSupportedContent-333").removeClass("show", 250);
    });
});
