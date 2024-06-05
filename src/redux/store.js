import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../redux/features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})