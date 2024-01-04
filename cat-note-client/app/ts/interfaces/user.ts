import {Task} from "@/app/ts/interfaces/task";
import {Achievement} from "@/app/ts/interfaces/achievement";

export interface User {
  id?: number,
  userName?: string;
  tasks?: Task[],
  achievements?: Achievement[],
  isAdmin?: boolean
}
