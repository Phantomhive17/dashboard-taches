const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.Value.trim();
    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText ;

        //permet de supprimer la tache au clic
        li.addEventListener('click' , () => {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }
});