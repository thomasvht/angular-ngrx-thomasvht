import {createFeatureSelector, MetaReducer} from "@ngrx/store";
import {todoReducer} from "./reducers/todo.reducer";
import {TodoState} from "./state/TodoState";

export const FEATURE_TOKEN = 'todos';

export const featureReducer = {
    todos: todoReducer
};

export const selectFeature = createFeatureSelector<TodoState>(FEATURE_TOKEN);

export const metaReducers: Array<MetaReducer<any, any>> = [];
