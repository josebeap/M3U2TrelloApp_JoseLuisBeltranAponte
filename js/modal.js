//Instanciamos y generamos nuestro modal de creación de nueva tarea
//Esto activando y desactivando la clase active

const modalNuevaTarea = document.querySelector('#modalNuevaTarea');

const btnNuevaTarea = document.querySelector('#btnNuevaTarea');

const btnCancelarNuevaTarea = document.querySelector('#btnCancelarNuevaTarea');

btnNuevaTarea.addEventListener('click', () => {
    modalNuevaTarea.classList.add('active');
});

btnCancelarNuevaTarea.addEventListener('click', () => {
    modalNuevaTarea.classList.remove('active');
});
