import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Todo, TodoState} from "../statemanagement/state/TodoState";
import {select, Store} from "@ngrx/store";
import {CompleteTodo, DeleteTodo} from "../statemanagement/actions/todos";

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

  complete(todo: Todo) {
    this.store.dispatch(new CompleteTodo(todo));
  }

  delete(id: any) {
    this.store.dispatch(new DeleteTodo(id));
  }

  trackByFn(index, todo) {
    return todo.id;
  }

}
