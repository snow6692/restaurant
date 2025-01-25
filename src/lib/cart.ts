import { cartItem } from "@/redux/features/cart/cartSlice";

export const deliveryFee = 5;

export const getCartQuantity = (cart: cartItem[]) => {
  return cart.reduce((quantity, item) => item.quantity! + quantity, 0);
};

export const getItemQuantity = (id: string, cart: cartItem[]) => {
  return cart.find((item) => item.id === id)?.quantity || 0;
};

export const getSubTotal = (cart: cartItem[]) => {
  return cart.reduce((total, cartItem) => {
    //item.basePrice +item.size.price +item.extras.price
    const extrasTotal = cartItem.extras?.reduce(
      (sum, extra) => sum + (extra.price || 0),
      0,
    );
    const itemTotal =
      cartItem.basePrice + (cartItem.size?.price || 0) + (extrasTotal || 0);
    return (total + itemTotal) * cartItem.quantity!;
  }, 0);
};

export const getTotalAmount = (cart: cartItem[]) => {
  return getSubTotal(cart) + deliveryFee;
};
