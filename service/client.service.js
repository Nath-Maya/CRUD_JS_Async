//!FETHC API
//Abre una conexion a la url, genera una promesa. La respuesta la recibe y la transforma en un formato json. 
  const listaClientes = () => {
    return fetch("http://localhost:3000/perfil").then((respuesta) => {
      return respuesta.json();
  });
  };


//recibe el objeto 
const crearCliente = (nombre, email) => {
  return fetch('http://localhost:3000/perfil', {
  method: 'POST',
    headers: {
      'Content-Type': 'applicacion/json'
    },
  body: JSON.stringify({nombre, email, id: uuid.v4()}) //convertir el objeto en texto
});
}

export const clientServices = {
  listaClientes,
  crearCliente,
};

