
//*CREAR ELEMENTO
//creo el elemento de html que recibira dos parametros de entrada.

const crearNuevaLinea = (nombre,email) => {
  const linea = document.createElement("tr");
  const contenido = `
   <td class="td" data-td>
   ${nombre}
   </td>
   <td>
   ${email}
   </td>
   <td>
     <ul class="table__button-control">
       <li>
         <a
           href="../screens/editar_cliente.html"
           class="simple-button simple-button--edit"
           >Editar</a
         >
       </li>
       <li>
         <button
           class="simple-button simple-button--delete"
           type="button"
         >
           Eliminar
         </button>
       </li>
     </ul>
   </td>
   `;
};

//Crear comunicacion entre el Front-end y Back-end
const http = new XMLHttpRequest();

//Abrir http (metodo,url)
http.open("GET", "http://localhost:3000/perfil");

//Se va a encargar de enviar la peticion al navegador o servidor de la url
http.send();

//Ejecutar funcion
http.onload = () => {
  const data = http.response;
  console.log(data);
};

console.log(http);
