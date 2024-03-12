import { configureStore } from "@reduxjs/toolkit";
import CardListSlice from "../slice/CardListSlice";

const store = configureStore({
  reducer: {
    cardList: CardListSlice,
  },
});
export default store;
