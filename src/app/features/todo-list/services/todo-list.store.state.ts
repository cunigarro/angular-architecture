import { TaskList } from "../types/task-list";

export class TodoListStoreState {
  taskListList: TaskList = {
      tasks: [],
      sort: {
          field: ''
      },
  };
}
