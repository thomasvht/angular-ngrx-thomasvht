import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {TodoState} from "../statemanagement/state/TodoState";
import {AddTodo} from "../statemanagement/actions/todos";
var uuid = require('uuid-v4');
// import * as uuid from 'uuid-v4';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private store: Store<TodoState>) { }

  ngOnInit() {
  }

  add(input: HTMLInputElement) {
    const id = uuid();
    const todo = {id: id, title: input.value, completed: false};
    this.store.dispatch(new AddTodo(todo));
    input.value = '';
  }
}
