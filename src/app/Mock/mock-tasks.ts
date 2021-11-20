import { Task } from "../Models/task";

function mockUpData() {
  let taskarray: Task[] = [];

  let taskItem = [
    "Take out the trash", "Feed the Dogs",
    "Dishes", "Take out the Compost",
    "Read Book", "Check pH balance", "Aerate Lawn"
  ];
  taskItem.forEach(item => {
    taskarray.push(new Task(item));
  });

  return taskarray;
}

export const MockTasks: Task[] = mockUpData();
