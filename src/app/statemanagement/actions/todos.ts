import {type} from "../util/util";
import {Action} from "@ngrx/store";

export const ActionsTypes = {
    ADD_TODO: type('ADD_TODO') as 'ADD_TODO'
};

export class AddTodo implements Action {
    readonly type = ActionsTypes.ADD_TODO;
    public payload: { id: string, title: string, completed: boolean };

    constructor(id: string, title: string = '', completed: boolean) {
        this.payload = {
            id: id,
            title: title,
            completed: completed
        };
    }
}

export type Actions = AddTodo;
