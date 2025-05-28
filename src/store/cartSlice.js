import { createSlice } from "@reduxjs/toolkit";
let datafromWeb = JSON.parse(localStorage.getItem("cart"));
const cartSlice = createSlice({
  name: "cart",
  initialState: datafromWeb,
  reducers: {
    addItem(state, action) {
      console.log(action);
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify([...state]));
    },
    removeItem(state, action) {
      let newProducts = state.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify([...newProducts]));
      return newProducts;
    },
  },
});
export default cartSlice.reducer;
export let cartActions = cartSlice.actions;
