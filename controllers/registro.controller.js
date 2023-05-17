import {clientServices} from "../service/client-service.js"

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); //prevenir el funcionamiento del formulario
  const nombre = document.querySelector("[data-nombre]").value; //obtener la informacion de los data atributes
  const email = document.querySelector("[data-email]").value;
  clientServices
  .crearCliente(nombre, email)
  .then((respuesta) => {
    window.location.href = "./screens/registro_completado.html";
  }) //promesa
  .catch((err) => console.log(err));
});
