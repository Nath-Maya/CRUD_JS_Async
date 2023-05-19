//!FETHC API
//Abre una conexion a la url, genera una promesa. La respuesta la recibe y la transforma en un formato json. 
const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());



//*-------CREAR CLIENTE
//Recibiendo el nombre y el email, realizo un post que recibo como objeto y convierto en lenguaje JSON. 

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};


//*-------ELIMINAR CLIENTE

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

//*-------DETALLE CLIENTE
//recibo el id de la url

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then( (respuesta) => respuesta.json());
  };


//*-------ACTUALIZAR CLIENTE
//recibo los valores de nombre y email.

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
  // "http://localhost:3000/perfil/03df4297-a92f-4698-8898-616f3cfbaa5f"
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ nombre, email})
})
.then((respuesta) => (respuesta))
.catch((err) => console.log(err))
};


export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};