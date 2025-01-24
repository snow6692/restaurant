"use client";
import { ProductWithRelations } from "@/types/product";

import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { formatCurrency } from "@/lib/formatters";
import { Size } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export default function PickSize({
  sizes,
  item,
  setSelectedSize,
  selectedSize,
}: {
  sizes: Size[];
  item: ProductWithRelations;
  selectedSize: Size;
  setSelectedSize: Dispatch<SetStateAction<Size>>;
}) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 rounded-md border border-gray-100 p-4"
        >
          <RadioGroupItem
            value={selectedSize.name}
            checked={selectedSize.id === size.id}
            onClick={()=>setSelectedSize(size)}
            id={size.id}
          />
          <Label htmlFor={size.id}>
            {size.name} {formatCurrency(item.basePrice + size.price)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
