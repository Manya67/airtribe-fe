import { createSlice } from "@reduxjs/toolkit";

const CartListSlice = createSlice({
  name: "cartList",
  initialState: { notStarted: [], inProgress: [], completed: [] },
  reducers: {
    notStarted_addItems: (state, action) => {
      state.notStarted.push(action.payload);
    },
    notStarted_removeItems: (state, action) => {
      const index = state.notStarted.indexOf(action.payload);
      state.notStarted.splice(index, 1);
    },
    inProgress_addItems: (state, action) => {
      state.inProgress.push(action.payload);
    },
    inProgress_removeItems: (state, action) => {
      const index = state.inProgress.indexOf(action.payload);
      state.inProgress.splice(index, 1);
    },
    completed_addItems: (state, action) => {
      state.completed.push(action.payload);
    },
    completed_removeItems: (state, action) => {
      const index = state.completed.indexOf(action.payload);
      state.completed.splice(index, 1);
    },
  },
});
export const {
  notStarted_addItems,
  notStarted_removeItems,
  inProgress_addItems,
  inProgress_removeItems,
  completed_addItems,
  completed_removeItems,
} = CartListSlice.actions;
export default CartListSlice.reducer;
