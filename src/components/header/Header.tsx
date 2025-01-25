import React from "react";
import Link from "../link/Link";
import Navbar from "./Navbar";
import CartButton from "./CartButton";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translate";
import LanguageSwitcher from "./LanguageSwitcher";

async function Header() {
  const locale = await getCurrentLocale();

  const { navbar } = await getTrans(locale);
  return (
    <header className="py-4 md:py-6">
      <div className="container flex items-center justify-between gap-6 lg:gap-10">
        <Link
          href={`/${locale}`}
          className="text-2xl font-semibold text-primary"
        >
          Restaurant
        </Link>
        <Navbar translation={navbar} />
        <LanguageSwitcher />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
