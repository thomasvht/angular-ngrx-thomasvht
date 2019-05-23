import * as todos from '../actions/todos';
import {Todo} from "../state/TodoState";
import {Actions} from "../actions/todos";

const defaultState = {
    todos: []
};

export function todoReducer(state: Array<Todo> = defaultState.todos,
                            action: Actions): Array<Todo> {
    switch(action.type) {
        case todos.ActionsTypes.ADD_TODO:
            return [...state, action.payload];
        default:
            return state;
    }
}
