const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const todotext = input.value;
  if (todotext)
  {
    const todoEl = document.createElement('li');
    todoEl.innerText = todotext;

    todoEl.addEventListener('click', () => {
        todoEl.classList.toggle('completed');
        });

    todoEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    
        todoEl.remove();
        });

    todos.appendChild(todoEl);

    input.value = '';
  }
});
