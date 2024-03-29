import './style.css'
import './index.css'
import { v4 as uuidV4 } from 'uuid'

type Task = {
  id: string, 
  title: string, 
  completed: boolean, 
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.querySelector<HTMLFormElement>("#new-task-form");
const input = document.querySelector<HTMLInputElement>("#new-task-title");
const tasks: Task[] = loadTasks();

tasks.forEach(addListItem);

form?.addEventListener("submit", e => {
  e.preventDefault();

  if (input?.value == '' || input?.value == null) return

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }
  tasks.push(newTask);

  addListItem(newTask);
  input.value = "";
});

function addListItem(task: Task) {
  const item = document.createElement('li');
  const label = document.createElement('label');
  const itemTitle = document.createElement('p');
  const checkbox = document.createElement('input');
  const deleteBtn = document.createElement('button');
  const editBtn = document.createElement('button');
  itemTitle.innerHTML = task.title;
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  checkbox.classList.add('checkbox')
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    saveTasks();
  });

  deleteBtn.classList.add('btn', 'btn-secondary', 'btn-sm');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.addEventListener('click', () => {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    item.remove();
    saveTasks();
  });

  editBtn.classList.add('btn', 'btn-primary', 'btn-sm');
  editBtn.innerHTML = 'Edit';
  editBtn.addEventListener('click', () => {
    const index = tasks.indexOf(task);
    let newTitle = prompt('Edit Task');
    if (newTitle == null || newTitle == "") {
      console.log('No changes made');
    }
    else { 
      tasks[index].title = newTitle;
      label.children[0].innerHTML = newTitle;
      saveTasks();
    }
  });

  label.append(itemTitle, checkbox, editBtn, deleteBtn);
  item.append(label);
  list?.append(item);

  saveTasks();
}

function saveTasks() {
  localStorage.setItem('TASKS', JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  const taskJSON = localStorage.getItem('TASKS');
  if(taskJSON == null) return [] 
  return JSON.parse(taskJSON);
}