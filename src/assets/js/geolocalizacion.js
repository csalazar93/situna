var tipoFicha = '';//Saber si es planta o atractivo

//Obtener geolocalizacion en ambas fichas
//Función que obtener la geolocalizaciòn actual
function obtenerLocalizacion(ficha) {

    tipoFicha = ficha;//Asignar la ficha a la que se le asignará las coordenadas

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.mostrarPosicion, this.mostrarError);
    } else {
        console.log("Tu navegador no soporta esta tecnologia");
    }
}

//Función que obtiene la latitud y longitud exactos
function mostrarPosicion(posicion_usuario) {
    switch (tipoFicha) {
        case 'P':
            var latitud = document.getElementById("latitudPlanta");
            var longitud = document.getElementById("longitudPlanta");
            break;
        case 'A':
            var latitud = document.getElementById("latitudAtractivo");
            var longitud = document.getElementById("longitudAtractivo");
            break;
    }
    latitud.value = posicion_usuario.coords.latitude;
    longitud.value = posicion_usuario.coords.longitude;
}

//Función para mostrar algún mensaje de erro
function mostrarError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}

