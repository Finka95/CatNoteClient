import {TaskStatus} from "@/app/ts/enums/taskStatus";

export interface Task {
  id?: number,
  title?: string,
  status: TaskStatus,
  date: Date,
  userId: number
}