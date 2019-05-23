import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Todo, TodoState} from "../statemanagement/state/TodoState";
import {select, Store} from "@ngrx/store";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]> = this.store.pipe(select(state => state.todos));

  constructor(private store: Store<TodoState>) { }

  ngOnInit() {
  }

  complete(todo: any) {
    // this.todosService.complete(todo);
  }

  delete(id: any) {
    // this.todosService.delete(id);
  }

  trackByFn(index, todo) {
    return todo.id;
  }

}
