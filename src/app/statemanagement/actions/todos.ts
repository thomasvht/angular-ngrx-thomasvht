import {type} from "../util/util";
import {Action} from "@ngrx/store";
import {Todo} from "../state/TodoState";

export const ActionsTypes = {
    ADD_TODO: type('ADD_TODO') as 'ADD_TODO',
    COMPLETE_TODO: type('COMPLETE_TODO') as 'COMPLETE_TODO',
    DELETE_TODO: type('DELETE_TODO') as 'DELETE_TODO'
};

export class AddTodo implements Action {
    readonly type = ActionsTypes.ADD_TODO;
    public payload: Todo;

    constructor(todo: Todo) {
        this.payload = todo;
    }
}

export class CompleteTodo implements Action {
    readonly type = ActionsTypes.COMPLETE_TODO;
    public payload: Todo;

    constructor(todo: Todo) {
        this.payload = todo;
    }
}

export class DeleteTodo implements Action {
    readonly type = ActionsTypes.DELETE_TODO;
    public payload: {id: string};

    constructor(id: string) {
        this.payload = {id};
    }
}

export type Actions = AddTodo | CompleteTodo | DeleteTodo;
