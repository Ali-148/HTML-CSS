//selectors
const todoInput =document.querySelector(".todo-input");
const todoButton= document.querySelector(".todo-button")
const todolist= document.querySelector(".todo-list");
const filteroption = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click',addTodo);
todolist.addEventListener('click',deletecheck);
filteroption.addEventListener('click',filterTodo);
//Functions

function addTodo(Event)
{
 
    //prevent form from submitting
    event.preventDefault();

    //Todo Div
    const todoDiv =document.createElement('div');
    todoDiv.classList.add("todo");

    //create LI
    const newTodo =document.createElement('li');
    newTodo.innerText= todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check Mark Button
    const Mark= document.createElement('button');
    Mark.innerHTML='<i class= "fas fa-check"> </i>';
    Mark.classList.add('complete-btn');
    todoDiv.appendChild(Mark);

    //check trash button
    const trash= document.createElement('button');
    trash.innerHTML='<i class= "fas fa-trash"> </i>';
    trash.classList.add('complete-trash');
    todoDiv.appendChild(trash);
    console.log(typeof todoDiv);
    //append to list

    todolist.appendChild(todoDiv);
    todoInput.value=" ";
}


function deletecheck(e)
{

    const item = e.target;
    console.log(item,'dfegt');
    //delete TODO
     if(item.classList[0]=== "complete-trash")
     {
        
         const todo =item.parentElement;
         todo.classList.add("fall");
         todo.remove();
     }
   

     console.log(item.classList,"sfhkjg");


     if(item.classList[0]==="complete-btn")
     {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
     }
}


function filterTodo(e)
{
    const todos =todolist.childNodes;
    console.log(todolist.childNodes);
    console.log(e.target.value);
    todos.forEach(function(todo)
    {
       switch(e.target.value)
       {
        case "all":
            todo.style.display ="flex";
            break;

        case "completed":
            if(todo.classList.contains("completed"))
            {
                todo.style.display="flex";
            }
            else{
                todo.style.display="none";
            }
            break;

            case "uncompleted":
                if(!todo.classList.contains("completed"))
                {
                    todo.style.display="flex";
                }

                else{
                    todo.style.display="none";
                }
                break;
       }
    });

}