const addButton = document.getElementById('add-button');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

addButton.addEventListener('click', addItem);
itemInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

let itemCounter = 0;

function addItem() {
    const itemText = itemInput.value.trim();


    if (itemText === '' || /\d/.test(itemText) || itemText.length < 3) {
        itemInput.classList.add('error');

        setTimeout(() => {
            itemInput.classList.remove('error');
        }, 300);

        return;
    }

    itemCounter++;

    const listItem = document.createElement('li');
listItem.id = `item-${itemCounter}`;

const textNode = document.createElement('span');
textNode.textContent = itemText + "                              ";

const textCount = document.createElement('select');
for (let i = 1; i <= 10; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    textCount.appendChild(option);
}

const deleteIcon = document.createElement('span');
deleteIcon.classList.add('material-symbols-outlined');
deleteIcon.textContent = 'delete';

deleteIcon.addEventListener('click', function () {
    listItem.remove();
});

textNode.addEventListener('click', function () {
    listItem.classList.toggle('completed');
});

listItem.appendChild(textNode);
textNode.appendChild(textCount);
listItem.appendChild(deleteIcon);

itemList.appendChild(listItem);

itemInput.value = '';
itemInput.style.border = '';
itemInput.focus();
}








