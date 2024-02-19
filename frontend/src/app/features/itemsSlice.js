import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (store, actions) => {
      store.items = actions.payload.items;

      return store;
    },
  },
});

export const { setItems } = itemsSlice.actions;
export default itemsSlice.reducer;
