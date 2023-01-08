import { Injectable } from "@angular/core";
import { Store } from "src/app/shared/classes/store";
import { TodoListStoreState } from "./todo-list.store.state";

@Injectable()
export class CoffeeListStore extends Store<TodoListStoreState> {

}
