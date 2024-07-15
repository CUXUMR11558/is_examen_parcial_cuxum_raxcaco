
const form = document.getElementById('form');
const lista = document.getElementById('lista');
const totaltiempo = document.getElementById('totaltiempo');
let totalhoras = 0;

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const tarea = document.getElementById('tarea').value;
    const tiempo = document.getElementById('tiempo').value;
    addTask(tarea, parseInt(tiempo));

    form.reset();
});


function addTask(name, time) {
    const tareas = document.createElement('li');
    tareas.classList.add('task');
    tareas.innerHTML = `
        ${name} - ${time} horas
        <div>
            <button onclick="toggleTask(this, ${time})">Completar</button>
        </div>
    `;
    lista.appendChild(tareas);
}



function toggleTask(button, time) {
    const tareas = button.closest('.task');
    if (tareas.classList.contains('completed')) {
        tareas.classList.remove('completed');
        button.textContent = 'Completar';
        totalhoras -= time;
    } else {
        tareas.classList.add('completed');
        button.textContent = 'Incompletar';
        totalhoras += time;
    }
    updateTotalTime();
}

function updateTotalTime() {
    totaltiempo.textContent = `Tiempo total invertido: ${totalhoras} horas`;
}
