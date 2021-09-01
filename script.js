let searchSection = document.querySelector(".search-section");
let addButton = document.querySelector(".add-button");
let form = document.querySelector("form");
let removeButton = document.querySelectorAll(".delete-img");
let searchBar = document.querySelector(".search-bar");
let editTasks = document.querySelectorAll(".usual-text");  
let todoChecks = document.querySelectorAll(".todo-check");
let editButton = document.querySelectorAll(".edit-img");

addButton.onclick = function () {
  let newSection = document.createElement("section");

  let newInputText = document.createElement("input");
  newInputText.setAttribute("type", "text");
  newInputText.classList.add("input-text");

  let newEditButton = document.createElement("img");
  newEditButton.classList.add("edit-img");
  newEditButton.setAttribute("src", "edit.svg");

  let newRemoveButton = document.createElement("img");
  newRemoveButton.classList.add("delete-img");
  newRemoveButton.setAttribute("onclick", "doneNote(this)");
  newRemoveButton.setAttribute("src", "delete.svg");

  let newTextLabel = document.createElement("label");
  newTextLabel.classList.add("usual-text");
  newTextLabel.textContent = searchBar.value;

  newSection.classList.add("usual-section");

  let newCheckbox = document.createElement("input");
  newCheckbox.setAttribute("type", "checkbox");
  newCheckbox.classList.add("todo-check");

  if (searchBar.value === "") {
    alert("Input your task!");
    return false;
  }

  newSection.appendChild(newCheckbox);
  newSection.appendChild(newTextLabel);
  newSection.appendChild(newInputText);
  newSection.appendChild(newEditButton);
  newSection.appendChild(newRemoveButton);

  form.appendChild(newSection);

};

function doneNote(temp) {
  temp.parentNode.remove();
}

for (let todoCheck of todoChecks) {
  todoCheck.onchange = function () {
    let temp = this.parentNode;
    temp.classList.toggle("checked");
  };
}

for (let editBtn of editButton) {
  editBtn.addEventListener("click", function () {
    let temp = this.parentNode;
    let editInput = temp.querySelector("input[type=text]");
    let editLabel = temp.querySelector("label");
    let InputLabel;
    temp.classList.add("editMode");
    editInput.focus();
    editInput.value = editLabel.textContent;
    InputLabel = editLabel.textContent;
    temp.addEventListener("focusout", function () {
      temp.classList.remove("editMode");
      editLabel.textContent = editInput.value;
      if (editInput.value === "") {
        editLabel.textContent = InputLabel;
      }
    });
  });
}