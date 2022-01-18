import { Task } from "./task";

export class TaskList {
  private _list: Map<string, Task>;
  private _completedList: Map<string, Task>;
  private _deletedList: Map<string, Task>;

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

  public uncompleteTask(task: string) {
    let uncompleter = this._completedList.get(task);
    if (uncompleter) {
      if (!this._list.has(task))
        this._list.set(task, uncompleter);
      this._completedList.delete(task)
    }
  }

  private addToCompleted(task: Task) { this._completedList.set(task.taskItem, task); }

  private addToList(task: Task) { this._list.set(task.taskItem, task); }

  get deletedList(): Map<string, Task> { return this._deletedList; }

  get completedList(): Map<string, Task> { return this._completedList; }

  get list(): Map<string, Task> { return this._list }
}
