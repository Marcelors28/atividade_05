document.addEventListener('DOMContentLoaded', loadTasks)

const taskForm = document.getElementById('task-form')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')

taskForm.addEventListener('submit', function(event) {
    event.preventDefault()
    addTask(taskInput.value)
    taskInput.value = ''
})

function addTask(task) {
    if (task === '') return

    const taskItem = document.createElement('li')
    taskItem.className = 'flex justify-between items-center p-2 bg-gray-200 rounded mt-2'

    const taskText = document.createElement('span')
    taskText.textContent = task
    taskItem.appendChild(taskText)
    
    // Criando o botão concluir
    const completeButton = document.createElement('button')
    completeButton.textContent = 'Concluir'
    completeButton.className = 'bg-green-500 text-white px-2 py-1 rounded'
    completeButton.addEventListener('click', () => toggleCompleteTask(taskItem, taskText))
    taskItem.appendChild(completeButton)
    
     // Criando o botão editar
    const editButton = document.createElement('button')
    editButton.textContent = 'Editar'
    editButton.className = 'bg-yellow-500 text-white px-2 py-1 rounded ml-2'
    editButton.addEventListener('click', () => editTask(taskItem, taskText))
    taskItem.appendChild(editButton)

    // Criando o botão excluir
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Excluir'
    deleteButton.className = 'bg-red-500 text-white px-2 py-1 rounded ml-2'
    deleteButton.addEventListener('click', () => deleteTask(taskItem))
    taskItem.appendChild(deleteButton)

    taskList.appendChild(taskItem)
    saveTask(task)
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks.push({ text: task, completed: false })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks.forEach(task => {
        addTask(task.text)
        if (task.completed) {
            const taskItem = taskList.lastChild
            toggleCompleteTask(taskItem, taskItem.firstChild, false)
        }
    })
}

function editTask(taskItem, taskText) {
    const newTask = prompt('Editar tarefa:', taskText.textContent)
    if (newTask === null || newTask === '') return

    taskText.textContent = newTask
    updateTaskInStorage()
}
// Cria a função para concluir uma tarefa mudando o estilo da tarefa
function toggleCompleteTask(taskItem, taskText, updateStorage = true) {
    taskText.classList.toggle('line-through')
    taskText.classList.toggle('text-gray-500')
    if (updateStorage) updateTaskInStorage()
}

function updateTaskInStorage() {
    const tasks = []
    document.querySelectorAll('#task-list li').forEach(taskItem => {
        const taskText = taskItem.firstChild
        tasks.push({
            text: taskText.textContent,
            completed: taskText.classList.contains('line-through')
        })
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function deleteTask(taskItem) {
    taskItem.remove()
    updateTaskInStorage()
}
