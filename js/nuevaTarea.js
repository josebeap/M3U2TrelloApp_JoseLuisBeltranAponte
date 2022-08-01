const form = document.querySelector('#formNuevaTarea');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const formData = ev.target;
  
  // Información a enviar a la API
  const data = {
    title: formData.tituloTarea.value,
    person: formData.responsableTarea.value,
    details: formData.detalleTarea.value,
    // deadline: formData.deadLineTask.value,
    deadline: Number(moment().add(formData.deadLineTarea.value, 'days').format('X')),
    created: Number(moment().format("X")),
    state: 'to-do'
  };
  // Petición POST 
  axios.post(`${API_URL}/tasks`, data)
    .then((res) => {
      createTask(res.data);
      formData.reset();
    })
    .catch((err) => console.error(err));
});