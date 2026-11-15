let todos = [];
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
function render() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        todoList.innerHTML += `
            <li data-index="${index}">
                <span class="todo-text">${todo}</span>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </li>
        `;
    });
}
todoList.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    const index = li.getAttribute('data-index');
    if (e.target.classList.contains('delete-btn')) {
        todos.splice(index, 1);
        render();
    }
    if (e.target.classList.contains('edit-btn')) {
        const span = li.querySelector('.todo-text');
        const currentText = span.textContent;
        li.innerHTML = `
            <input type="text" class="edit-input" value="${currentText}">
            <button class="save-btn">Save</button>
        `;
        const saveBtn = li.querySelector('.save-btn');
        const editInput = li.querySelector('.edit-input');
        saveBtn.addEventListener('click', () => {
            if (editInput.value.trim() !== '') {
                todos[index] = editInput.value;
                render();
            }
        });
    }
});
addBtn.addEventListener('click', () => {
    if (todoInput.value.trim() !== '') {
        todos.push(todoInput.value);
        todoInput.value = '';
        render();
    }
});