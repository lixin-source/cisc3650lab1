// Event Listener for submitting todo item, receives info submitted
var todoitem = document.getElementById('todoitem');
var todoDueDate = document.getElementById('todoDueDate');
var submit = document.getElementById('submit');
var list = document.getElementById('list');

// Submit color

var taskType = document.getElementById('taskType');
var taskColor = document.getElementById('taskColor');
var taskAdd = document.getElementById('taskAdd');
var taskTypeList = document.getElementById('taskTypeList');

// var moreBtn = document.createElement("button"); 

todoitem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitted();
    }
  });

todoDueDate.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        submitted();
      }
});

submit.addEventListener("click", submitted);

function submitted() {

    // Create actual to do part
    var displayedToDo = document.createElement("div");
    var displayed = document.createElement("p");
    displayed.setAttribute("id", "strike-through");

    // Create date
    var displayDate = document.createElement("p");
    displayDate.setAttribute("id", "strike-through");
    var checkBox = document.createElement("input");

    //Create checkbox for todo task
    checkBox.type = "checkbox"
    checkBox.setAttribute("id", "checkbox");
    checkBox.addEventListener("change", taskDone);

    // Add class to full to do item
    displayedToDo.classList.add("fullToDoItem");

    // Change Color
    // var changeColorMenu = document.createElement("select");
    // var defaultColor = document.createElement("option");
    // defaultColor.value = '';
    // defaultColor.text = 'Type';
    // defaultColor.selected = true;
    // changeColorMenu.add(defaultColor);
    // changeColorMenu.setAttribute("id", "dropdown-type-menu");

    // Copy all colors to the dropdown menu

    // console.log(taskTypeList.length);
    // for (let i = 0; i < taskTypeList.length; i++) {
    //     const addValue = taskTypeList[i].textContent;
    //     console.log(taskTypeList[i].textContent);
    //     if (!optionExists(addValue)) {
    //       const newOption = document.createElement('option');
    //       newOption.value = addValue;
    //       newOption.textContent = addValue;
    //       changeColorMenu.appendChild(newOption);
    //     }
    //   }


    // changeColorMenu.addEventListener('change', () => {
    //     todoitem.style.color = changeColorMenu.value;
    //     todoDueDate.style.color = changeColorMenu.value;
    //   });


    // Delete
    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', deleteItem);


    displayed.appendChild(document.createTextNode(todoitem.value));
    displayDate.appendChild(document.createTextNode(todoDueDate.value));

    displayedToDo.appendChild(checkBox)
    displayedToDo.appendChild(displayed);
    displayedToDo.appendChild(displayDate); 
    // displayedToDo.appendChild(changeColorMenu);
    displayedToDo.appendChild(deleteBtn);
    list.appendChild(displayedToDo);

    todoitem.value = '';
    todoDueDate.value = '';

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


// taskAdd.addEventListener("click", function taskAdded() {

//     // Reference the drop down menus in all of them
//     var changeColorMenu = document.querySelectorAll("#dropdown-type-menu")

//     // When clicked, display the type with the color of what was selected
//     var displayType = document.createElement('p');
//     displayType.appendChild(document.createTextNode(taskType.value));
//     displayType.setAttribute("class", "colorTypes")
//     displayType.style.color = taskColor.value;
//     taskTypeList.appendChild(displayType);

//     changeColorMenu.forEach(changeColorMenu => {
//         const newOption = document.createElement('option');
//         // Set its text content to the text content of the p element
//         newOption.textContent = displayType.textContent;
//         // Append the option element to the destination select element
//         changeColorMenu.appendChild(newOption.cloneNode(true));
//         //Append all previously added displayTypes to all menus
//     });

//     taskType.value ='';
//     taskColor.value = '#ffffff';
// });



// function optionExists(optionValue) {
//     const options = taskTypeList.options;
//     for (let i = 0; i < options.length; i++) {
//       if (options[i].value === optionValue) {
//         return true;
//       }
//     }
//     return false;
//   }


// function changeColor(event) {
    
// }    