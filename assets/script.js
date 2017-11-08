var taskList = document.querySelector('#taskList');
var taskChecks = document.querySelectorAll('.taskCheck');
var removeTaskButtons = document.querySelectorAll('.fa-trash-o');
var addTaskButton = document.querySelector('#addTaskButton');
var addTaskText = document.querySelector('#addTaskText');

// add .completed to task element when attached checkbox is checked
function toggleTaskComplete() {
  this.parentElement.classList.toggle('completed');
}

function removeTask() {
  this.parentElement.style.display = 'none';
}

//add toggleTaskComplete onclick handler to pre-existing tasks
for (var i = 0; i < taskChecks.length; i++) {
  taskChecks[i].addEventListener('click', toggleTaskComplete);
}

//add removeTask onclick handler to pre-existing tasks
for (var i = 0; i < removeTaskButtons.length; i++) {
  removeTaskButtons[i].addEventListener('click', removeTask);
}

// TODO: Add addTask functionality
addTaskButton.addEventListener('click', function () {
  if (addTaskText.value != '') {
    var li = document.createElement('LI');
    var chk = document.createElement('INPUT');
    chk.type = 'checkbox';
    chk.classList.add('taskCheck');
    chk.onclick = toggleTaskComplete;
    var t = document.createTextNode(' ' + addTaskText.value);
    var i = document.createElement('I');
    i.classList.add('fa');
    i.classList.add('fa-trash-o');
    i.onclick = removeTask;
    li.appendChild(chk);
    li.appendChild(t);
    li.appendChild(i);
    taskList.appendChild(li);
    addTaskText.value = '';
  } else {
    alert('Please type a description of your new task');
  }
});
