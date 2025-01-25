"use client";
import React from "react";
import Link from "../link/Link";
import { Routes } from "@/constants/enums";
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { selectCartItems } from "@/redux/features/cart/cartSlice";
import { getCartQuantity } from "@/lib/cart";

function CartButton() {
  const cart = useAppSelector(selectCartItems);
  const cartQuantity = getCartQuantity(cart);
  return (
    <Link href={Routes.CART} className="group relative block">
      <span className="absolute -top-4 start-4 size-5 rounded-full bg-orange-400 text-center text-sm">
        {cartQuantity}
      </span>
      <ShoppingCart className="size-6 text-primary transition-colors duration-200 group-hover:text-orange-500" />
    </Link>
  );
}

export default CartButton;
