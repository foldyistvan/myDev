var numbers = [];
var ul = document.querySelector('ul.list');
var span = document.querySelector('span.result');
var biggest = NaN;

function refresh() {
    addItem();
    ul.innerHTML = '';
    numbers.forEach(function (n, i) {
        var li = document.createElement('li');

        li.className = 'list-item list-item-' + (i + 1);
        li.innerText = n;
        li.appendChild(createDeleteButton());

        if (isNaN(biggest) || n > biggest) {
            biggest = n;
        }

        ul.appendChild(li);
    });
    span.innerHTML = !isNaN(biggest) ? biggest : 'nincs elem';

    return false;
}

function addItem() {
    var candidate = document.getElementById("candidate");

    if (candidate.value && candidate.value !== '') {
        numbers.push(parseInt(candidate.value, 10))
    }

    biggest = NaN;

    candidate.value = ''
}

function createDeleteButton() {
    var deleteBtn = document.createElement('button');

    deleteBtn.type = 'button';
    deleteBtn.className = 'btn-delete';
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click', removeItem);

    return deleteBtn;
}

function removeItem(ev) {
    var index = parseInt(ev.target.parentElement.className.match(/list-item-(\d*)$/)[1], 10) - 1;
    numbers.splice(index, 1);
    refresh();
}
