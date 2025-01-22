// "use client";
// import React, { useState } from "react";
// import Link from "../link/Link";
// import { Pages, Routes } from "@/constants/enum";
// import { usePathname } from "next/navigation";
// import { Button } from "../ui/button";
// import { Menu, XIcon } from "lucide-react";

// function Navbar() {
//   const pathname = usePathname();
//   const [openMenu, setOpenMenu] = useState(false);

//   const links = [
//     { label: "Menu", href: Routes.MENU },
//     { label: "About", href: Routes.ABOUT },
//     { label: "Contact", href: Routes.CONTACT },
//     { label: "Login", href: `${Routes.AUTH}/${Pages.LOGIN}` },
//   ];

//   return (
//     <nav className="flex items-center justify-between">
//       <Button
//         size={"sm"}
//         className={`absolute right-5 top-5 lg:hidden ${openMenu ? "bg-red-500 hover:bg-red-600" : "bg-orange-500 hover:bg-orange-600"}`}
//         onClick={() => setOpenMenu(!openMenu)}
//       >
//         {openMenu ? <XIcon size={4} /> : <Menu size={4} />}
//       </Button>
//       <ul
//         className={` ${openMenu ? "" : "-translate-x-52"} transition-all duration-300 lg:flex lg:flex-row lg:gap-x-10`}
//       >
//         {links.map((link) => (
//           <li key={link.href} className="mb-10 lg:mb-0">
//             <Button asChild variant={"link"}>
//               <Link
//                 className={`${pathname === link.href ? "text-orange-500" : ""} ${link.href === `${Routes.AUTH}/${Pages.LOGIN}` ? "bg-red-500" : ""} rounded-lg p-2 transition-colors duration-200`}
//                 href={link.href}
//               >
//                 {link.label}
//               </Link>
//             </Button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

"use client";

import { Pages, Routes } from "@/constants/enum";
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
                // className={`font-semibold transition-colors duration-200 hover:text-orange-600 ${
                //   pathname.startsWith(link.href)
                //     ? "text-orange-500"
                //     : "text-gray-400"
                // } ${link.href === `${Routes.AUTH}/${Pages.LOGIN}` ? "bg-red-500" : ""}} `}
                className={`${pathname === link.href ? "text-orange-500" : ""} ${link.href === `${Routes.AUTH}/${Pages.LOGIN}` ? "bg-red-500" : ""} rounded-lg p-2 transition-colors duration-200`}
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
