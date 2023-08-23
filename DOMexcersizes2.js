let ulList = document.querySelector('ul#list');
// 1. Update the 'Coffee' item to say 'Fair Trade Coffee'
console.log(ulList.children[1].innerHTML);
ulList.children[1].innerHTML = 'Fair Trade Coffee';
// 2. Remove 'Twinkies' from the list
ulList.children[3] = null;
console.log(ulList.children[3].remove());
// 3. Add an item 'Cheese Whiz'
ulList.appendChild(document.createElement('li'));
ulList.children[ulList.children.length - 1].innerHTML = 'Cheese Whiz';
// 4. Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']
ulList.innerHTML = '';
ulList.appendChild(document.createElement('li'));
ulList.children[ulList.children.length - 1].innerHTML = 'protein powder';
ulList.appendChild(document.createElement('li'));
ulList.children[ulList.children.length - 1].innerHTML = 'muscle milk';
ulList.appendChild(document.createElement('li'));
ulList.children[ulList.children.length - 1].innerHTML = 'power bars';
// 5. Add the class 'important' to the muscle milk item.
ulList.children[1].classList.add('important');
console.log(ulList.children[1]);
