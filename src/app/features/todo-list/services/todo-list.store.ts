import { Injectable, OnDestroy } from "@angular/core";
import { retry, Subject, switchMap, takeUntil, tap } from "rxjs";
import { Store } from "src/app/shared/classes/store";
import { Task } from "../types/task";
import { TodoListEndpoint } from "./todo-list.endpoint";
import { TodoListStoreState } from "./todo-list.store.state";

@Injectable()
export class TodoListStore extends Store<TodoListStoreState> implements OnDestroy {
  private ngUnsubscribe$: Subject<undefined> = new Subject();
  private reloadTasks$: Subject<undefined> = new Subject();

  constructor(
    private todoListEntpoint: TodoListEndpoint
  ) {
    super(new TodoListStoreState());
  }

  init() {
    this.initReloadTasks$();
    this.reloadTasks(this.state);
  }

  reloadTasks(state: any): void {
    this.reloadTasks$.next(state);
}

  private initReloadTasks$() {
    this.reloadTasks$
      .pipe(
        switchMap(() => {
          return this.todoListEntpoint.listTasks();
        }),
        tap((tasks: any) => {
          this.updateTasksState(tasks);
        }),
        retry(),
        takeUntil(this.ngUnsubscribe$)
      )
      .subscribe();
  }

  private updateTasksState(tasks: Task[]) {
    this.setState({
      ...this.state,
      taskListList: {
          ...this.state.taskListList,
          tasks: tasks,
      }
    });
  }

  ngOnDestroy(): void {
    // this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
