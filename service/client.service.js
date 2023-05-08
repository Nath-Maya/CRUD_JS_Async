//Crear comunicacion entre el Front-end y Back-end
const http = new XMLHttpRequest();

//Abrir http (metodo,url)
http.open("GET",'http://localhost:3000/perfil')

//Se va a encargar de enviar la peticion al navegador o servidor de la url
http.send();

//Ejecutar funcion
http.onload = () => {
   const data = http.response;
   console.log(data);
}

console.log(http);


