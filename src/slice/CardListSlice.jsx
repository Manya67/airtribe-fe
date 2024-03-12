import { createSlice } from "@reduxjs/toolkit";

const CardListSlice = createSlice({
  name: "cardList",
  initialState: {
    statuses: {
      notStarted: {
        details: {
          label: "Not started",
          using: "notStarted",
          color: "#FFCCD1",
        },
        list: [],
      },
      inProgress: {
        details: {
          label: "In progress",
          using: "inProgress",
          color: "#FBEECC",
        },
        list: [],
      },
      completed: {
        details: { label: "Completed", using: "completed", color: "#CCE7E1" },
        list: [],
      },
    },
  },
  reducers: {
    addItems: (state, action) => {
      const status = action.payload.status;
      state.statuses[status].list.push(action.payload);
    },
    removeItems: (state, action) => {
      console.log(action.payload);
      const status = action.payload.heading;
      const index = state.statuses[status].list.indexOf(action.payload.id);
      state.statuses[status].list.splice(index, 1);
    },
    addStatus: (state, action) => {
      const using = action.payload.details.using;
      state.statuses[using] = action.payload;
    },
  },
});
export const { addItems, removeItems, addStatus } = CardListSlice.actions;
export default CardListSlice.reducer;
