export const todoStore: TodoStore = {
  todos: {
    value: [],
    key: "todos",
  },
};

export interface TodoStore {
  todos: Todos;
}

export interface Todos {
  value: Todo[];
  key: string;
}

export interface Todo {
  id: string;
  title: string;
}
