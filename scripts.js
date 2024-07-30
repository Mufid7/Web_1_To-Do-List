document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
 
    addButton.addEventListener('click', function () {
        const taskText = todoInput.value.trim();
        
        if (taskText !== '') {
            const listItem = document.createElement('li');
 
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            listItem.appendChild(taskSpan);
 
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit-button');
            listItem.appendChild(editButton);
 
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');
            listItem.appendChild(deleteButton);
 
            todoList.appendChild(listItem);
            todoInput.value = '';
 
            deleteButton.addEventListener('click', function () {
                todoList.removeChild(listItem);
            });
 
            editButton.addEventListener('click', function () {
                const newTaskText = prompt('Edit your task:', taskSpan.textContent);
                if (newTaskText !== null && newTaskText.trim() !== '') {
                    taskSpan.textContent = newTaskText.trim();
                }
            });
        }
    });
 
    todoInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
 });
 