import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const todos = {
  todoList: [
    {
      id: "1",
      label: "리액트 공부",
      isCompleted: true,
    },
    {
      id: "2",
      label: "넥스트 공부",
      isCompleted: false,
    },
    {
      id: "3",
      label: "주스탠드 공부",
      isCompleted: false,
    },
  ],
};

const todoStore = (set) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => ({
      todos: [todo, ...state.todos],
    }));
  },
  removeTodo: (todoId) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    }));
  },
  toggleTodo: (todoId) => {
    set((state) => {
      const updateTodos = state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
      });
    });
  },
});

const useTodoStore = create(devtools(persist(todoStore, { name: "todos" })));
export default useTodoStore;
