const toDoItems = document.getElementsByClassName('to-do-items')[0];
const input = document.getElementById('input');
const trashIcon = document.getElementById('trash');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    addItem();
    clearInput();
});

input.addEventListener('keydown', function (event) {
    
    if(event.key === 'Enter')
        addItem();
});


function addItem() {
    let divParent = document.createElement('div');
    let divChild = document.createElement('div');
    let checkIcon = document.createElement('i');
    let trashIcon = document.createElement('i');

    divParent.className = 'item';
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = 'fa-solid fa-square-check';
    checkIcon.style.color = 'rgb(4, 63, 255)';
    checkIcon.addEventListener('click', function() {
        checkIcon.style.color = 'limegreen';
    });

    divChild.appendChild(checkIcon);
    
    trashIcon.className = 'fa-solid fa-trash';
    trashIcon.style.color = 'darkgrey';
    trashIcon.addEventListener('click', function() {
        divParent.remove();
    });

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}

function clearInput() {
    input.value = '';
}