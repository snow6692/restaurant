import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "../link/Link";
import { Languages, Routes } from "@/constants/enums";
import { ArrowRightCircle } from "lucide-react";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translate";

async function Hero() {
  const locale = await getCurrentLocale();

  const {} = await getTrans(locale);
  return (
    <section className="mx-20 my-7 flex flex-col space-x-5 md:flex-row md:justify-between">
      <div className="flex flex-col">
        <h1 className="my-7 text-4xl font-semibold">Lorem ipsum dolor sit</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit consectetur liquid elite. Lorem ipsum dolor sit
          consectetur liquid elite. Lorem ipsum dolor sit consectetur liquid
          elite.
        </p>
        <div className="space-x-2">
          <Button
            className="my-4 rounded-full bg-orange-500 hover:bg-orange-600"
            asChild
          >
            <Link href={Routes.MENU}>
              Order now
              <ArrowRightCircle
                size={4}
                className={`${locale === Languages.ARABIC ? "rotate-180" : ""}`}
              />
            </Link>
          </Button>

          <Button
            variant={"link"}
            className="my-4 rounded-full font-semibold"
            asChild
          >
            <Link href={Routes.MENU}>
              Show more
              <ArrowRightCircle
                size={4}
                className={`${locale === Languages.ARABIC ? "rotate-180" : ""}`}
              />
            </Link>
          </Button>
        </div>
      </div>
      <div className="">
        <Image
          loading="eager"
          priority
          alt="pizza image"
          src="/pizza.webp"
          width={500}
          height={600}
          className="hidden object-contain lg:block"
        />
      </div>
    </section>
  );
}

export default Hero;
