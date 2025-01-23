import React from "react";
import MainHeading from "../MainHeading";
import Menu from "../menu/Menu";
import prisma from "@/lib/prisma";

async function BestSellers() {
  const bestSellers = await prisma.product.findMany({
    include: {
      sizes: true,
      extras: true,
    },
  });
  console.log(bestSellers);
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
