var numbers = [100, 1, 32, 99, 24, 7, 4444];
var ul = document.querySelector('ul');
var span = document.querySelector('span');
var liList = '';

var biggest = numbers[0];
for(var i=0; i<numbers.length; i++) {
    liList += '<li>'+numbers[i]+'</li>';
    if(numbers[i] > biggest) {
        biggest = numbers[i];
    }
}

ul.innerHTML = liList;
span.innerHTML = biggest;
