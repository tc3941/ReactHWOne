//Get Header
let header = document.querySelector('header');
console.log(header);
//get all section
console.log('All sections');
console.log(document.querySelectorAll('section'));
//section element with class "current"
console.log('section element with class "current');
let currentSelection = document.querySelector('section.current');
console.log(currentSelection);
//Get the section that comes after the current section
console.log('section that comes after the current section');
console.log(currentSelection.nextElementSibling);
//Get the h2 node from the section before the 'current' section
console.log('section that comes after the current section');
console.log(currentSelection.previousElementSibling.children[0]);
//Get the div that contains the section that has an h2 with a class of 'highlight'
console.log('section that comes after the current section');
console.log(document.querySelector('h2.highlight').parentElement.parentElement);
//Get all the sections that contain an H2 (using a single statement);
console.log('All the sections that contain an H2');
let hSections = [];
let allSections = document.querySelectorAll('section');

for (let i = 0; i <= document.querySelectorAll('section').length - 1; i++) {
  if (document.querySelectorAll('section h2')[i])
    hSections.push(allSections[i].children[0]);
}
console.log(hSections);
