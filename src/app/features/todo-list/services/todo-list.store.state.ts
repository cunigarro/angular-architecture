import { TaskList } from "../types/task-list";

export class TodoListStoreState {
  TaskListList: TaskList = {
      tasks: [],
      sort: {
          field: ''
      },
  };
}
