import { ProductWithRelations } from "@/types/product";
import { Size } from "@prisma/client";
import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { formatCurrency } from "@/lib/formatters";

export default function PickSize({
  sizes,
  item,
}: {
  sizes: Size[];
  item: ProductWithRelations;
}) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 rounded-md border border-gray-100 p-4"
        >
          <RadioGroupItem value={size.price.toString()} id={size.id} />
          <Label htmlFor={size.id}>
            {size.name} {formatCurrency(item.basePrice + size.price)}{" "}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
