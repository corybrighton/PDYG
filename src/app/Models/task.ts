export class Task {
  private _finished: boolean;
  private _taskItem: string;
  private _estimateOfTime: number;
  private _timed: number;
  private _priority: number;
  private _urgency: number;

  constructor(
    taskItem: string,
    finished: boolean = false,
    estimateOfTime: number = 0,
    timed: number = 0,
    priority: number = 5,
    urgency: number = 5) {
    this._finished = finished;
    this._taskItem = taskItem;
    this._estimateOfTime = estimateOfTime;
    this._timed = timed;
    this._priority = priority;
    this._urgency = urgency;
  }

  public set taskItem(value: string) {
    this._taskItem = value;
  }

  public get taskItem(): string {
    return this._taskItem;
  }


  public set finished(v: boolean) {
    this._finished = v;
  }

  public get finished(): boolean {
    return this._finished;
  }

  public set estimateOfTime(v: number) {
    this._estimateOfTime = v;
  }

  public get estimateOfTime(): number {
    return this._estimateOfTime;
  }

  public get timed(): number {
    return this._timed;
  }

  public set priority(value: number) {
    this._priority = (value < 0 || value > 10) ? 5 : value;
  }

  public get priority(): number {
    return this._priority;
  }

  public get urgency(): number {
    return this._urgency
  }

  public set urgency(value: number) {
    this._urgency = (value >= 0 && value <= 10) ? value : 5;
  }

}
