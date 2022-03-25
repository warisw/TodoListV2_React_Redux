import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const formSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    addItem: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },
    deleteItem: (state, { payload }) => {
      state.todos = state.todos.filter(({ id }) => id != payload);
    },

    completeItem: (state, { payload }) => {
      //doulevei kai xwris?
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload) {
          todo.complete = !todo.complete;
        }
        return todo;
      });
    },
  },
});

export const { addItem, deleteItem, completeItem } = formSlice.actions;
export const selectTodos = (state) => state.todoStore.todos;
export default formSlice.reducer;
