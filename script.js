const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche tout rechargement ou modification bizarre de l'URL
    
    // On s'assure de bien cibler .value
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Permet de supprimer la tâche au clic
        li.addEventListener('click', () => {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = ""; // Réinitialise l'input
    }
});