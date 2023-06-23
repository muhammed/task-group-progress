export interface ITask {
  description: string;
  value: number;
  checked: boolean;
}

export interface ITaskGroup {
  name: string;
  tasks: ITask[];
}
