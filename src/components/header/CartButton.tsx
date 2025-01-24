import React from "react";
import Link from "../link/Link";
import { Routes } from "@/constants/enum";
import { ShoppingCart } from "lucide-react";

function CartButton() {
  return (
    <Link href={Routes.CART} className="group relative block">
      <span className="absolute -top-4 start-4 size-5 rounded-full bg-orange-400 text-center text-sm">
        2
      </span>
      <ShoppingCart className="size-6 text-primary transition-colors duration-200 group-hover:text-orange-500" />
    </Link>
  );
}

export default CartButton;
