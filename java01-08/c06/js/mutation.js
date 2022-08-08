var elList, addlink, newText, counter, listItems;

elList = document.getElementById('list');
addlink = document.querySelector('a');
counter = document.getElementById('counter');

function addItems(e) {
    e.preventDefault();
    newEL = document.createElement('li');
    newText = document.createTextNode('New list item');
    newEL.appendChild(newText);
    elList.appendChild(newEL);
}

function updateCount() {
    listItems = elList.getElementsByTagName('li').length;
    counter.innerHTML = listItems;
}

addlink.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);