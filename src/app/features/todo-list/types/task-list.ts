import { Sort } from "src/app/shared/types/sort";
import { Task } from "./task";

export interface TaskList {
  tasks: Task[];
  sort: Sort;
}
