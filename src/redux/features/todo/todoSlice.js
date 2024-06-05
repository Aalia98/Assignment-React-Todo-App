import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Learn React.js", isCompleted: false }],
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
    },
    // delete todo
    removeTodo: (state, action) => {
      const findIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos.splice(findIndex, 1);
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
    },
    // toggle todo is completed
    toggleCompleted: (state, action) => {
        state.todos = state.todos.map((todo) =>
          todo.id == action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        );
      },
  },
});

export const { addTodo, removeTodo, editTodo, updateTodo, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;
