console.log("hello!!")
const todoInput = document.querySelector('.todoInput')
const todoButton = document.querySelector('.todoButton')
const todoList = document.querySelector('.todoList');
const filterOption = document.querySelector('.filterTodo')
filterOption.addEventListener('click',filterTodos)
todoList.addEventListener('click',deleteCheck);
todoButton.addEventListener('click',(e)=>{

    console.log("hello world");
    e.preventDefault();

    const toDoDiv = document.createElement('div')
    toDoDiv.classList.add('todo')

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todoList')
    toDoDiv.appendChild(newTodo);  
    // Creating Complete BUtton
    const completedButton = document.createElement('button')
    completedButton.classList.add("completedButton")
    completedButton.innerHTML = '<i class = "fas fa-check"></i>'
    console.log(completedButton);
    toDoDiv.appendChild(completedButton);
    // Creating a trash BUtton
    const trashButton = document.createElement('button')
    trashButton.classList.add('trashButton')
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>'
    toDoDiv.appendChild(trashButton);

    todoList.appendChild(toDoDiv);
    todoInput.value = "";

})
function deleteCheck(e){
    const item = e.target;
    if(item.classList[0]==='trashButton')
    {
        const todo = item.parentElement;
        // todo.remove();
            todo.remove();

    }
    if(item.classList[0]=='completedButton')
    {
        const todo = item.parentNode;
        todo.classList.toggle('completed')

    }
    console.log(e.target);
}
function filterTodos(e){
    const allTodos = todoList.childNodes;
    console.log(allTodos);
    allTodos.forEach(function(todo){
        console.log(e.target.value);
        switch(e.target.value){
            case "all": {
               todoList.style.display = "flex";
               break;
            }
            case "completed":{
                if(todoList.classList.contains('completed')){
                todoList.style.display = "flex";
                }
                else{
                    todoList.style.display = 'none';
                }
            }
            case "uncompleted":{
                if(!todoList.classList.contains('completedButton')){
                    todoList.style.display = "flex";
                }
                else{
                    todoList.style.display = 'none';
                }
            }
        }

    })

}

