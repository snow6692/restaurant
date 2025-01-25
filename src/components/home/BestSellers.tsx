import React from "react";
import MainHeading from "../MainHeading";
import Menu from "../menu/Menu";
import { getBestSellers } from "@/server/db/products";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translate";

async function BestSellers() {
  const bestSellers = await getBestSellers(3);
  const locale = await getCurrentLocale();

  const {} = await getTrans(locale);
  return (
    <section>
      <div className="container h-screen">
        <div className="mb-4 text-center">
          <MainHeading title="Checkout" subTitle="Our best sellers" />
        </div>
        <Menu items={bestSellers} />
      </div>
    </section>
  );
}

export default BestSellers;
