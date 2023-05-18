import { clientServices } from "../service/client-service.js";
//obtener el identificador del params de la url


const obtenerInformacion = () => {
   const url = new URL(window.location);
   const id = url.searchParams.get("id");
}