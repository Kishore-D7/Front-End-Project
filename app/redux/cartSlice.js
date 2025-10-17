import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { list: [] },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const exists = state.list.find((item) => item.id === product.id);
      if (exists) {
        state.list = state.list.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        state.list.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.list.find((i) => i.id === id);
      if (!item) return;
      if (item.quantity === 1) {
        state.list = state.list.filter((i) => i.id !== id);
      } else {
        state.list = state.list.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
    },
    clearCart: (state) => {
      state.list = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
