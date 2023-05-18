import { clientServices } from "../service/client-service.js";
//obtener el identificador del params de la url para entregarlo al html


const obtenerInformacion = () => {
   const url = new URL(window.location);
   const id = url.searchParams.get("id");

   //En caso de tener un error mostrar la siguiente pantalla
   if (id === null) {
      window.location.href = "/screens/error.html"
   
   }

   //situar los datos en el html
   const nombre = document.querySelector("[data-nombre]")
   const email = document.querySelector("[data-email]")

   clientServices.detalleCliente(id).then((perfil) => {
      nombre.value = perfil.nombre;
      email.valure = perfil.nombre;
   });
}

obtenerInformacion();