import { Task } from "../Models/task";
import { TaskList } from "../Models/task-list";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.round(Math.random() * (max - min) + min);
}


function mockUpData(): TaskList {
  let listoftasks: TaskList = new TaskList();

  const today: Date = new Date();
  const inAWeek: Date = new Date();
  inAWeek.setDate(today.getDate() + 7);

  let taskItem = [
    "Take out the trash", "Feed the Dogs",
    "Dishes", "Take out the Compost", "Take the Dogs for a walk",
    "Read Book", "Check pH balance in Hot tub", "Aerate Lawn", "Mow Lawn"
  ];
  taskItem.forEach(item => {
    const dd = getRandomInt(today.getDate() - 7, inAWeek.getDate());
    const hh = getRandomInt(0, 23);
    const mm = getRandomInt(0, 59);
    const newDate = new Date(inAWeek.getFullYear(), inAWeek.getMonth(), dd, hh, mm);
    const newTask = new Task(item, newDate);
    listoftasks.addTask(newTask)
  });

  listoftasks.addTask(new Task("Now"));

  let newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1,
    today.getHours(), today.getMinutes())
  listoftasks.addTask(new Task("In A Day", newDate));

  newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(),
    today.getHours() + 1, today.getMinutes())
  listoftasks.addTask(new Task("In A Hour", newDate));

  newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(),
    today.getHours(), today.getMinutes() + 1)
  listoftasks.addTask(new Task("In A Minute"))

  newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1,
    today.getHours(), today.getMinutes())
  listoftasks.addTask(new Task("Yesterday", newDate));

  newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(),
    today.getHours() - 1, today.getMinutes())
  listoftasks.addTask(new Task("An Hour ago", newDate));

  newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(),
    today.getHours(), today.getMinutes() - 1)
  listoftasks.addTask(new Task("A Minute ago"))

  newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(),
    today.getHours(), today.getMinutes() + 2)
  listoftasks.addTask(new Task("In 2 Minutes"))

  newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(),
    today.getHours(), today.getMinutes() + 20)
  listoftasks.addTask(new Task("In 20 Minutes"))

  return listoftasks;
}

export const MockTasks: TaskList = mockUpData();
