// Variable de la URL de la Api Fake
const API_URL = "https://my-json-server.typicode.com/josebeap/M3U2TrelloApp_JoseLuisBeltranAponte";

//Petición Get a la Api Fake
axios
  .get(`${API_URL}/tasks`)
  .then((res) => showAllTasks(res.data))
  .catch((err) => console.error(err));

//Mapeo de la información
const showAllTasks = (data) => {
  data.map((task) => createTask(task));
};

const createTask = (task) => {
  //Creación de la estructura de las tarjetas
  let newTask = document.createElement("article");
  //le pasamos la clase card-task
  newTask.classList.add("card-task");

  //Creamos un elemento h3 para el titulo
  let taskTitle = document.createElement("h3");
  //Le asignamos una clase
  taskTitle.classList.add("card-task__title");
  //Le añadimos el titulo traido de la Api
  taskTitle.innerText = task.title;
  
  //Ahora creamos un parrafo que contendra el responsable y lo colocamos de la info de la Api
  let taskResponsible = document.createElement("p");
  
  taskResponsible.classList.add("card_task__responsible");
  
  taskResponsible.innerHTML = `<span class="card_task__responsible--tag-creator">Responsable:</span> ${task.person}`;

  //Ahora creamos para los detalles
  let taskDetails = document.createElement("p");
  
  taskDetails.classList.add("card-task__details");
  
  taskDetails.innerHTML = `<span class="card-task__details--task-details">Descripción:</span> ${task.details} `;

  //En una etiqueta parrafo pasamos la fecha mapeada
  let taskDate = document.createElement("p");
  
  taskDate.classList.add("card-task__date");
  
  taskDate.innerHTML = `<span class="card-task__date--tag-date">Plazo:</span> ${dateFormat(
    task.deadline
  )}`;

  let taskCreate = document.createElement("p");
  taskCreate.classList.add("card-task__date");
  taskCreate.innerHTML = `<span class="card-task__date--tag-date">Creación:</span> ${dateFormat(
    task.created
  )}`;

  newTask.appendChild(taskTitle);
  newTask.appendChild(taskResponsible);
  newTask.appendChild(taskDetails);
  newTask.appendChild(taskDate);
  newTask.appendChild(taskCreate);

  //Referenciamos las columnas segun el Id
  let columnToDo = document.querySelector("#todoTareas");
  let columnInProgress = document.querySelector("#progresoTareas");
  let columnDone = document.querySelector("#finalizadasTareas");

  //Asignamos las tareas a las columnas segun la correspondiente
  if (task.state === "to-do") {
    columnToDo.appendChild(newTask);
  }
  if (task.state === "in-progress") {
    columnInProgress.appendChild(newTask);
  }
  if (task.state === "done") {
    columnDone.appendChild(newTask);
  }
};