
const form = document.querySelector('#todo-form');
// console.log(form);

const taskInput = document.querySelector('#task-input');
// console.log(taskInput);

const tasksList = document.querySelector('.tasks-list')



form.addEventListener('submit', addTask)
tasksList.addEventListener('click', deleteTask);
tasksList.addEventListener('click', doneTask);

if (localStorage.getItem('tasks')) {
    tasksList.innerHTML = localStorage.getItem('tasks');
}

function addTask(e) {
    e.preventDefault();
    const inputValue = taskInput.value;

    const taskItem = `
    <li class="list-group-item mb-2 d-flex align-items-center justify-content-between shadow-sm">
    <div class="list-group-item__inner w-75 me-2 ps-2" >${inputValue}
    </div>
    <div class="list-group-item__buttons d-flex flex-nowrap">
        <button type="button" class="btn btn-success me-2" data-action="done">
            <i class="bi bi-check-square"></i>
        </button>

        <button type="button" class="btn btn-danger" data-action="delete">
            <i class="bi bi-trash3-fill"></i>
        </button>
    </div>

</li>
    `
    tasksList.insertAdjacentHTML('beforeend', taskItem)
    taskInput.value = '';
    taskInput.focus();
    saveHTMLStorage();
}


function deleteTask(e) {

    if (e.target.dataset.action === 'delete') {
        const task = e.target.closest('.list-group-item');
        task.remove();

    }
    saveHTMLStorage();

}


function doneTask(e) {
    if (e.target.dataset.action === "done") {
        const task = e.target.closest('.list-group-item');
        task.classList.toggle('done')
    }
    saveHTMLStorage();

}


function saveHTMLStorage() {
    localStorage.setItem('tasks', tasksList.innerHTML)
}


function gateHTMLStorage() {
    console.log(localStorage.getItem('tasks'));
}

