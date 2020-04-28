//Obtener geolocalizacion en ambas fichas

//Función que obtener la geolocalizaciòn actual
function obtenerLocalizacion() {
    var mostrar_coordenadas = document.getElementById("coordenadas_usuario");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.mostrarPosicion, this.mostrarError);
    } else {
        mostrar_coordenadas.innerHTML = "Tu navegador no soporta esta tecnologia";
    }
}

//Función que obtiene la latitud y longitud exactos
function mostrarPosicion(posicion_usuario) {
    var mostrar_coordenadas = document.getElementById("coordenadas_usuario");
    mostrar_coordenadas.innerHTML = "Latitud: " + posicion_usuario.coords.latitude +
        "<br>Longitud: " + posicion_usuario.coords.longitude;
}

//Función para mostrar algún mensaje de erro
function mostrarError(error) {
    var mostrar_coordenadas = document.getElementById("coordenadas_usuario");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            mostrar_coordenadas.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            mostrar_coordenadas.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            mostrar_coordenadas.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            mostrar_coordenadas.innerHTML = "An unknown error occurred."
            break;
    }
}

