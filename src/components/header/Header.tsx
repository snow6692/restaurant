import React from "react";
import Link from "../link/Link";
import { Routes } from "@/constants/enums";
import Navbar from "./Navbar";
import CartButton from "./CartButton";

function Header() {
  return (
    <header className="py-4 md:py-6">
      <div className="container flex items-center justify-between gap-6 lg:gap-10">
        <Link
          href={Routes.ROOT}
          className="text-2xl font-semibold text-primary"
        >
          Restaurant
        </Link>
        <Navbar />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
