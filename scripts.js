document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', function () {
        addTask();
    });

    todoInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
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
                if (editButton.textContent === 'Edit') {
                    // Jika tombol berlabel 'Edit', kita akan mengganti teks tugas dengan input field untuk mengedit.
                    const editInput = document.createElement('input');
                    editInput.type = 'text';
                    editInput.value = taskSpan.textContent; // Isi input dengan teks tugas saat ini.
                    
                    // Sisipkan input field sebelum elemen span yang menampilkan teks tugas.
                    listItem.insertBefore(editInput, taskSpan);
                    // Hapus elemen span yang sebelumnya menampilkan teks tugas.
                    listItem.removeChild(taskSpan);
                    
                    // Ubah label tombol menjadi 'Save' untuk menunjukkan mode edit.
                    editButton.textContent = 'Save';
                } else {
                    // Jika tombol berlabel 'Save', kita akan menyimpan perubahan yang dilakukan.
                    const newTaskText = listItem.querySelector('input').value.trim(); // Ambil teks dari input field dan hapus spasi ekstra.
                    
                    if (newTaskText !== '') { // Pastikan teks tidak kosong.
                        // Update teks tugas dengan teks baru dari input field.
                        taskSpan.textContent = newTaskText;
                        
                        // Sisipkan kembali elemen span yang berisi teks tugas sebelum input field.
                        listItem.insertBefore(taskSpan, listItem.querySelector('input'));
                        // Hapus input field yang telah digunakan untuk mengedit.
                        listItem.removeChild(listItem.querySelector('input'));
                        
                        // Ubah label tombol kembali menjadi 'Edit'.
                        editButton.textContent = 'Edit';
                    } else {
                        // Jika teks baru kosong, tampilkan alert untuk memberitahukan pengguna.
                        alert('Task cannot be empty');
                    }
                }
            });
            
        }
    }
});
