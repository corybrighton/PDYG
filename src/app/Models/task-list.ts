import { Task } from "./task";

export class TaskList {
  private _list: Map<string, Task>;
  private _completedList: Map<string, Task>;
  private _deletedList: Map<string, Task>;
  private _taskAtHand: number = 0;

  constructor() {
    this._list = new Map();
    this._completedList = new Map();
    this._deletedList = new Map();
  }

  changeTaskName(newName: string, task: Task) {
    const oldName = task.taskItem;
    task.taskItem = newName;
    if (this._list.has(newName)) {
      this.addToList(task);
      this._list.delete(oldName);
    } else if (this._completedList.has(newName)) {
      this.addToCompleted(task);
      this._completedList.delete(oldName);
    }
  }

  createTask(taskName: string) {
    if (!this._completedList.has(taskName) && !this._list.has(taskName))
      this._list.set(taskName, new Task(taskName));
  }

  getTaskAtHand(): Task {
    const taskKeys = [...this._list.keys()];
    if (this._taskAtHand >= taskKeys.length || this._taskAtHand < 0)
      this._taskAtHand = 0;
    return this._list.get(taskKeys[this._taskAtHand])!;
  }

  set taskAtHand(n: number) { this._taskAtHand = n; }

  addTask(task: Task) { this.addToList(task); }

  removeTask(task: Task) {
    this._deletedList.set(task.taskItem, task);
    if (this._list.has(task.taskItem))
      this._list.delete(task.taskItem);
    if (this._completedList.has(task.taskItem))
      this._completedList.delete(task.taskItem);
  }

  public completeTask(task: Task): Map<string, Task> {
    if (this._completedList.has(task.taskItem))
      return this.completedList;
    task.finished = true;
    this.addToCompleted(task);
    this._list.delete(task.taskItem);
    return this.completedList;
  }

  public uncompleteTask(task: Task) {
    task.finished = false;
    if (!this._list.has(task.taskItem))
      this._list.set(task.taskItem, task);
    if (this._completedList.has(task.taskItem))
      this._completedList.delete(task.taskItem)
  }

  private addToCompleted(task: Task) { this._completedList.set(task.taskItem, task); }

  private addToList(task: Task) { this._list.set(task.taskItem, task); }

  get deletedList(): Map<string, Task> { return this._deletedList; }

  get completedList(): Map<string, Task> { return this._completedList; }

  get list(): Map<string, Task> { return this._list }
}
