// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add a new task to the list
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText) {
        // Create list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => li.remove());

        // Append delete button to list item
        li.appendChild(deleteBtn);

        // Add list item to the task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});

// Add task by pressing Enter
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskBtn.click();
    }
});
