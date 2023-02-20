// Event Listener for submitting todo item, receives info submitted
var todoitem = document.getElementById('todoitem');
var submit = document.getElementById('submit');
var list = document.getElementById('list');

submit.addEventListener("click", function submitted(){

    var displayedToDo = document.createElement("div");
    var displayed = document.createElement("p");
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox"
    displayedToDo.appendChild(checkBox)
    checkBox.setAttribute("id", "checkbox");
    // var moreBtn = document.createElement("button"); 
    // var moreList = document.createElement("ul");


    displayedToDo.classList.add("fullToDoItem");

    // moreList.classList.add("moreList");
    // moreBtn.innerText = 'More';


    // var deleteBtn = document.createElement("button");
    // deleteBtn.innerText = 'Delete';
    // deleteBtn.addEventListener('click', deleteItem);

    // var editBtn = document.createElement("button");
    // editBtn.innerText = 'Edit';
    


    
    // displayedToDo.appendChild(buttonList)

    //<div class="options"><i class="uil uil-elipsis-h"></i><ul class="optionsmenu><li>Delete</li> </ul> </div>';

    
    // displayedToDo.appendChild(moreBtn);

    displayed.appendChild(document.createTextNode(todoitem.value));
    displayedToDo.appendChild(displayed);
    list.appendChild(displayedToDo);

});

function display(event){
    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', deleteItem);
}

function deleteItem(event) {
    const item = event.target.parentNode;
    todoitem.removeChild(item);
}

// var todoOptions = document.querySelector("todo-options");

// todoOptions.addEventListener("change", function chooseTodo(event) {  
//     if (event.target.value === "delete") {
//         const todoItem = document.getElementById("todo-item");
//         todoItem.parentNode.removeChild(todoItem);
//       } else if (todoOption.value === "edit") {
//         const todoText = document.getElementById("todo-text");
//         const userInput = prompt("Enter new todo text:");
//         todoText.innerText = userInput;
//       }
// });


// document.querySelector("todo-options").addEventListener("change", function(){
//     if (this.value == "delete") {
//         console.log("deleted");
//     } else {
//         console.log("selected");
//     }
// });