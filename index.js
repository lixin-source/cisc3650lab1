// Event Listener for submitting todo item, receives info submitted
var todoitem = document.getElementById('todoitem');
var todoDueDate = document.getElementById('todoDueDate');
var submit = document.getElementById('submit');
var list = document.getElementById('list');

// var moreBtn = document.createElement("button"); 

submit.addEventListener("click", function submitted(){

    var displayedToDo = document.createElement("div");
    var displayed = document.createElement("p");
    var displayDate = document.createElement("p");
    var checkBox = document.createElement("input");

    checkBox.type = "checkbox"
    checkBox.setAttribute("id", "checkbox");
    checkBox.addEventListener("change", taskDone);

    displayedToDo.classList.add("fullToDoItem");

    //  var moreBtn = document.createElement("button"); 
    //  moreBtn.textContent = "More";
    //  moreBtn.addEventListener("click", moreButton);

    //Using select instead of a button
    // var moreMenu = document.createElement("select");
    // moreMenu.id = "moreMenu";
    // moreMenu.innerText = 'More';
    // const option1 = document.createElement('option');
    // option1.value = 'delete';
    // option1.text = 'Delete';
    // moreMenu.add(option1);
    // moreMenu.addEventListener('change', handleDropdownChange);

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', deleteItem);

    // var editBtn = document.createElement("button");
    // editBtn.innerText = 'Edit';
    
    // displayedToDo.appendChild(buttonList)

    //<div class="options"><i class="uil uil-elipsis-h"></i><ul class="optionsmenu><li>Delete</li> </ul> </div>';

    
    // displayedToDo.appendChild(moreBtn);

    displayed.appendChild(document.createTextNode(todoitem.value));
    displayDate.appendChild(document.createTextNode(todoDueDate.value));

    displayedToDo.appendChild(checkBox)
    displayedToDo.appendChild(displayed);
    displayedToDo.appendChild(displayDate); 
    // displayedToDo.appendChild(moreBtn);
    displayedToDo.appendChild(deleteBtn);
    list.appendChild(displayedToDo);

});

function moreButton() {
    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', deleteItem);
}

// delete function
// function handleDropdownChange(event) {
//     const parentDiv = event.parentNode;
//     if (event.target.value === 'delete') {
//       parentDiv.remove();
//     }
//   }

function display(event){
    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', deleteItem);
}

// Delete To Do
function deleteItem(event) {
    const item = event.target.parentNode;
    item.remove();
}

function taskDone() {
    if (this.checked) {
        timeoutId = setTimeout(function() {
            alert("Congratulations!");
          }, 3000);
    }else {
    clearTimeout(timeoutId);
    }
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