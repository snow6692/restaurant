"use client";

import { Pages, Routes } from "@/constants/enums";
import Link from "../link/Link";
import { Button } from "../ui/button";
import { useState } from "react";
import { Menu, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const pathname = usePathname();

  const links = [
    {
      title: "Menu",
      href: Routes.MENU,
    },
    {
      title: "About",
      href: Routes.ABOUT,
    },
    {
      title: "Contact",
      href: Routes.CONTACT,
    },
    { title: "Login", href: `${Routes.AUTH}/${Pages.LOGIN}` },
  ];

  return (
    <nav className="order-last lg:order-none">
      <Button
        variant="secondary"
        size="sm"
        className="bg-orange-500 hover:bg-orange-600 lg:hidden"
        onClick={() => setOpenMenu(true)}
      >
        <Menu className="!h-6 !w-6" />
      </Button>
      <ul
        className={`fixed lg:static ${
          openMenu ? "left-0 z-50" : "-left-full"
        } top-0 flex h-full w-full flex-col items-start gap-10 bg-background px-10 py-20 transition-all duration-500 lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:bg-transparent lg:p-0`}
      >
        <Button
          size="sm"
          className="absolute right-10 top-10 bg-red-500 hover:bg-red-600 lg:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className="!h-6 !w-6" />
        </Button>
        {links.map((link) => (
          <li key={link.href}>
            <Button asChild variant={"link"}>
              <Link
                onClick={() => setOpenMenu(false)}
                href={link.href}
                className={`${
                  pathname === link.href ||
                  pathname === link.href.replace(/\/$/, "")
                    ? "text-orange-500"
                    : "text-gray-400"
                } ${
                  link.href === `${Routes.AUTH}/${Pages.LOGIN}`
                    ? "bg-red-500"
                    : ""
                } rounded-lg p-2 text-orange-500 transition-colors duration-200`}
                // className={`${pathname === link.href ? "text-orange-500" : "text-gray-400"} ${link.href === `${Routes.AUTH}/${Pages.LOGIN}` ? "bg-red-500" : ""} rounded-lg p-2 transition-colors duration-200`}
              >
                {link.title}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
