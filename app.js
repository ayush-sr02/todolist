//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

//functions
function addTodo(e){
    //prevent from refresh
    event.preventDefault();
    // console.log('Helloo');
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;

    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Buttons
    const compButton = document.createElement('button');
    compButton.innerHTML = '<i class="fas fa-check"></i>';
    compButton.classList.add("comp-btn");
    todoDiv.appendChild(compButton);

    const delButton = document.createElement('button');
    delButton.innerHTML = '<i class="fas fa-trash"></i>';
    delButton.classList.add("del-btn");
    todoDiv.appendChild(delButton);
    //append to list
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //delete
    if(item.classList[0]==='del-btn'){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
        todo.remove();
        });
    }
    //check
    if(item.classList[0]==='comp-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


function saveLocalTodos(todo){
    
}