//!FETHC API
//Abre una conexion a la url, genera una promesa. La respuesta la recibe y la transforma en un formato json. 
  const listaClientes = () => {
    return fetch("http://localhost:3000/perfil").then((respuesta) => {
      return respuesta.json();
  });
  };

export const clientServices = {
  listaClientes,
};

