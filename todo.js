const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos =toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
} // 투두 지우는 함수

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id =newTodo.id
    const span = document.createElement("span");
    span.innerText= newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
} //투두를 화면에 나타내는 함수

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo =toDoInput.value;
    toDoInput.value="";
    const newTodoObj={
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
} //투드를 만드는 함수 (아마도......?)

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos=parsedToDos
    parsedToDos.forEach(paintToDo);
}

function sexyFilter(){

}