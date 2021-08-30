let searchSection = document.querySelector('.search-section');
let addButton = document.querySelector('.add-button')
let form = document.querySelector('form');

addButton.onclick = function ()
{
  let newSection = document.createElement('section');
  newSection.classList.add('usual-section');
  form.append(newSection);
  
}