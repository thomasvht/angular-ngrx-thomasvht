import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import {ReactiveFormsModule} from "@angular/forms";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {StoreModule} from "@ngrx/store";
import {metaReducers, featureReducer} from "./statemanagement/rootReducer";

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoItemComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        StoreModule.forRoot(featureReducer, {metaReducers}),
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
