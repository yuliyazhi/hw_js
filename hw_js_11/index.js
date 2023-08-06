

function createTask() {
    const task = document.querySelector('ul');
    const newElement = document.createElement('li');
    let input = document.querySelector('input');
    newElement.textContent = input.value;
    task.append(newElement);
    input.value = '';

}
document.querySelector('#push').onclick = createTask;



const list = document.querySelector('ul');

list.addEventListener('click', function (evt) {
    if (evt.target.tagName === 'LI') {

        evt.target.classList.toggle('doneTask');
    }
});

