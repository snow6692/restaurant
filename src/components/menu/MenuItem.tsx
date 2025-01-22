import Image from "next/image";
import React from "react";

import { formatCurrency } from "@/lib/formatters";
import AddToCartButton from "./AddToCartButton";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MenuItem({ pizza }: { pizza: any }) {
  return (
    <li className="">
      <div className="relative mx-auto h-48 w-48">
        <Image
          fill
          src={pizza.image}
          alt={pizza.name}
          className="object-cover"
        />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <h2>{pizza.name}</h2>
        <strong>{formatCurrency(pizza.basePrice)}</strong>
      </div>
      <p className="line-clamp-3 text-sm text-gray-500">{pizza.description}</p>
      <AddToCartButton item={pizza} />
    </li>
  );
}
