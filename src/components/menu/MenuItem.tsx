import Image from "next/image";
import React from "react";

import { formatCurrency } from "@/lib/formatters";
import AddToCartButton from "./AddToCartButton";
import { ProductWithRelations } from "@/types/product";

export default function MenuItem({ item }: { item: ProductWithRelations }) {
  return (
    <li className="">
      <div className="relative mx-auto h-48 w-48">
        <Image fill src={item.image} alt={item.name} className="object-cover" />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <h2>{item.name}</h2>
        <strong>{formatCurrency(item.basePrice)}</strong>
      </div>
      <p className="line-clamp-3 text-sm text-gray-500">{item.description}</p>
      <AddToCartButton item={item} />
    </li>
  );
}
