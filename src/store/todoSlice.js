import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        title: action.payload,
        id: Date.now(),
        completed: false,
      });
    },
    removeTodo(state, action) {
      return {
        ...state,
        todos: [...state.todos].filter((todo) => todo.id !== action.payload),
      };
    },
    setCompleted(state, action) {
      state.todos[action.payload].completed =
        !state.todos[action.payload].completed;
    },
    todoChange(state, action) {
      state.todos[action.payload.id].title = action.payload.title;
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, setCompleted, todoChange } =
  todoSlice.actions;
