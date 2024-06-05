import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
  todoToEdit: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // add todo
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isCompleted: false
      };
      state.todos.push(todo);
    //   save in local storage
    localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    // delete todo
    removeTodo: (state, action) => {
      const findIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos.splice(findIndex, 1);
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    // find todo
    editTodo: (state, action) => {
      state.todoToEdit = state.todos.find((todo) => todo.id == action.payload);
    },
    // update todo
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id == state.todoToEdit.id
          ? { ...todo, text: action.payload }
          : todo
      );
      state.todoToEdit = null;
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    // toggle todo is completed
    toggleCompleted: (state, action) => {
        state.todos = state.todos.map((todo) =>
          todo.id == action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        );
        localStorage.setItem("todos", JSON.stringify(state.todos))
      },
  },
});

export const { addTodo, removeTodo, editTodo, updateTodo, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;
