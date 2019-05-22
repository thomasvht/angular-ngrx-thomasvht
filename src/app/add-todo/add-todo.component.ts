import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  add(input: HTMLInputElement) {
    // this.todosService.add(input.value);
    input.value = '';
  }
}
