const taskInput=document.getElementById("taskInput");
const addTaskBtn=document.getElementById("addTaskBtn");
const taskList=document.getElementById("taskList");
const emptyMessage=document.getElementById("emptyMessage");
const totalTasks=document.getElementById("totalTasks");
const pendingTasks=document.getElementById("pendingTasks");
const completedTasks=document.getElementById("completedTasks");

function addTask(){
    const text=taskInput.value.trim();
    if(text===""){alert("Please enter a task.");taskInput.focus();return;}

    const item=document.createElement("li");
    item.classList.add("task-item");

    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.classList.add("task-checkbox");

    const span=document.createElement("span");
    span.classList.add("task-text");
    span.textContent=text;

    const deleteBtn=document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent="🗑️";
    deleteBtn.setAttribute("aria-label","Delete task");

    item.append(checkbox,span,deleteBtn);
    taskList.appendChild(item);
    taskInput.value="";
    taskInput.focus();
    updateStats();
}

addTaskBtn.addEventListener("click",addTask);

taskInput.addEventListener("keydown",event=>{
    if(event.key==="Enter") addTask();
});

taskList.addEventListener("click",event=>{
    const item=event.target.closest(".task-item");
    if(!item) return;

    if(event.target.classList.contains("delete-btn")){
        item.remove();
        updateStats();
    }else if(event.target.classList.contains("task-checkbox")){
        item.classList.toggle("completed",event.target.checked);
        updateStats();
    }
});

function updateStats(){
    const total=taskList.querySelectorAll(".task-item").length;
    const completed=taskList.querySelectorAll(".task-item.completed").length;
    totalTasks.textContent=total;
    completedTasks.textContent=completed;
    pendingTasks.textContent=total-completed;
    emptyMessage.style.display=total===0?"block":"none";
}

updateStats();
