document.addEventListener('DOMContentLoaded', function () {
   const addButton = document.getElementById('add-button');
   const todoInput = document.getElementById('todo-input');
   const todoList = document.getElementById('todo-list');

   addButton.addEventListener('click', function () {
       const taskText = todoInput.value.trim();
       
       if (taskText !== '') {
           const listItem = document.createElement('li');
           listItem.textContent = taskText;
           
           const deleteButton = document.createElement('button');
           deleteButton.textContent = 'Delete';
           deleteButton.classList.add('delete-button');
           listItem.appendChild(deleteButton);
           
           todoList.appendChild(listItem);
           todoInput.value = '';

           deleteButton.addEventListener('click', function () {
               todoList.removeChild(listItem);
           });
       }
   });

   todoInput.addEventListener('keypress', function (e) {
       if (e.key === 'Enter') {
           addButton.click();
       }
   });
});
