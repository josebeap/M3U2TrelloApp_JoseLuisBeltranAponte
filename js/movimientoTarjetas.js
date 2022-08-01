//Referenciamos los contenedores de la tareas para lograr referecnciarlas y moverlas entre las columnas
const sor = new Sortable.default(
    document.querySelectorAll('.container-tasks'),
    { draggable: 'article' }
  );