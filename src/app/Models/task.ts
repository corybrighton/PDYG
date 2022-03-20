export class Task {
  private _finished: boolean;
  private _taskItem: string;
  private _estimateOfTime: number;
  private _timed: number;
  private _priority: number;
  private _urgency: number;
  private _dueDate: Date;
  private _repeats: boolean;
  private _notes: string;
  private _postponed: boolean;

  constructor(
      taskItem: string,
      dueDate: Date = new Date(),
      finished: boolean = false,
      estimateOfTime: number = 0,
      timed: number = 0,
      priority: number = 5,
      urgency: number = 5,
      repeats: boolean = false,
      notes: string = "",
      postponed: boolean = false)
  {
    this._finished = finished;
    this._taskItem = taskItem;
    this._estimateOfTime = estimateOfTime;
    this._timed = timed;
    this._priority = priority;
    this._urgency = urgency;
    this._dueDate = dueDate;
    this._repeats = repeats;
    this._notes = notes;
    this._postponed = postponed;
  }

  public set postponed(v: boolean) { this._postponed = v; }

  public get postponed() { return this._postponed; }

  public set taskItem(v: string) { this._taskItem = v; }

  public get taskItem(): string { return this._taskItem; }

  public set finished(v: boolean) { this._finished = v; }

  get finished(): boolean { return this._finished; }

  public set estimateOfTime(v: number) { this._estimateOfTime = v; }

  public get estimateOfTime(): number { return this._estimateOfTime; }

  public get timed(): number { return this._timed; }

  public set priority(v: number) { this._priority = (v < 0 || v > 10) ? 5 : v; }

  public get priority(): number { return this._priority; }

  public get urgency(): number { return this._urgency; }

  public set urgency(v: number) { this._urgency = (v >= 0 && v <= 10) ? v : 5; }

  public get dueDate(): Date { return this._dueDate; }

  public set dueDate(v: Date) { this._dueDate = v; }

  public set notes(v: string) { this._notes = v; }

  public get notes() { return this._notes; }

  public timeLeft(): string {
    const minutesInMill = 60 * 1000;
    const hoursInMill = 60 * minutesInMill;
    const daysInMill = 24 * hoursInMill;
    const now: Date = new Date();
    let left: string = "Error";
    let t: number = 0;
    let secondLeft = this._dueDate.getTime() - now.getTime();

    if (Math.abs(secondLeft) > daysInMill) {
      left = "D";
      t = daysInMill;
    } else if (Math.abs(secondLeft) > hoursInMill) {
      left = "H";
      t = hoursInMill;
    } else {
      left = "M";
      t = minutesInMill;
    }

    return this.convertTime(secondLeft, t, left);
  }

  private convertTime(s: number, t: number, d: string) {
    return Math.ceil(s / t) + " " + d;
  }

  public get repeats(): boolean { return this._repeats; }

  public set repeats(v: boolean) { this._repeats = v; }

}
