let searchSection = document.querySelector(".search-section");
let addButton = document.querySelector(".add-button");
let form = document.querySelector("form");
let removeButton = document.querySelectorAll(".remove-button");
addButton.onclick = function () {
  let sections = document.querySelectorAll("section");
  let newSection = document.createElement("section");
  let newDoneButton = document.createElement("button");
  let newRemoveButton = document.createElement("button");
  let newTextDiv = document.createElement("div");
  newDoneButton.classList.add("done-button");
  newDoneButton.textContent = "Done";
  newRemoveButton.classList.add("remove-button");
  newRemoveButton.textContent = "Remove";
  newRemoveButton.setAttribute('onclick', 'delNote(this)');
  newTextDiv.classList.add("usual-text");
  newTextDiv.textContent = "Some very important text";
  newSection.classList.add("usual-section");
  newSection.append(newTextDiv);
  newSection.append(newDoneButton);
  newSection.append(newRemoveButton);
  if (sections.length % 2 === 0) {
    newSection.classList.add("unusual-section");
  } else {
    newSection.classList.add("usual-section");
  }
  form.append(newSection);
};
removeButton.onclick = function () {
  let removeList = removeButton.length;
  console.log(removeList);
};

function delNote(temp) {
  temp.parentNode.remove();
}
