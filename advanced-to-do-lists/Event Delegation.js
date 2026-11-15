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
});
addBtn.addEventListener('click', () => {
    if (todoInput.value.trim() !== '') {
        todos.push(todoInput.value);
        todoInput.value = '';
        render();
    }
});