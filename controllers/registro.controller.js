const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) => {
   evento.preventDefault(); //prevenir el funcionamiento del formulario
   const nombre = document.querySelector('[data-nombre]').value; //obtener la informacion de los data atributes
   const email = document.querySelector('[data-email]').value;
   console.log('formulario');
   console.log(nombre, ' - ', email);
});