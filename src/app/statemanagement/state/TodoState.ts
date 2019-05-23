export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export interface TodoState {
    todos: Array<Todo>;
}
