import { RootState } from "@/redux/store";
import { Extra, Size } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";

export type cartItem = {
  name: string;
  id: string;
  image: string;
  basePrice: number;
  quantity?: number;
  sizes?: Size;
  extras?: Extra[];
};

type cartState = {
  items: cartItem[];
};
const initialState: cartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state: RootState) => state.cart.items;
