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
        case todos.ActionsTypes.COMPLETE_TODO:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        case todos.ActionsTypes.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
}
