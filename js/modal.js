const modalNuevaTarea = document.querySelector('#modalNuevaTarea');

const btnNuevaTarea = document.querySelector('#btnNuevaTarea');

const btnCancelarNuevaTarea = document.querySelector('#btnCancelarNuevaTarea');

btnNuevaTarea.addEventListener('click', () => {
    modalNuevaTarea.classList.add('active');
});

btnCancelarNuevaTarea.addEventListener('click', () => {
    modalNuevaTarea.classList.remove('active');
});
