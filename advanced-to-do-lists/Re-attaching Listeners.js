let todos = [];
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function render() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todo}</span>
            <button class="delete-btn">Delete</button>
        `;

        const delBtn = li.querySelector('.delete-btn');
        delBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            render();
        });

        todoList.appendChild(li);
    });
}

addBtn.addEventListener('click', () => {
    if (todoInput.value.trim() !== '') {
        todos.push(todoInput.value);
        todoInput.value = '';
        render();
    }
});