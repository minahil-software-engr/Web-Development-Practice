let todos = [];
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
function render() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        todoList.innerHTML += `
            <li data-index="${index}">
                <span>${todo}</span>
                <button class="delete-btn">Delete</button>
            </li>
        `;
    });
}
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
        }
    });
});
observer.observe(todoList, { childList: true });
todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const li = e.target.closest('li');
        const index = li.getAttribute('data-index');
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