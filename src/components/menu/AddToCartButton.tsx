"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { ProductWithRelations } from "@/types/product";
import PickSize from "./PickSize";
import Extras from "./Extras";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addCartItem, selectCartItems } from "@/redux/features/cart/cartSlice";
import { Extra, ProductSizes, Size } from "@prisma/client";
import { useState } from "react";
import { formatCurrency } from "@/lib/formatters";
import { getItemQuantity } from "@/lib/cart";
import ChooseQuantity from "./ChooseQuantity";

function AddToCartButton({ item }: { item: ProductWithRelations }) {
  const cart = useAppSelector(selectCartItems);
  const quantity = getItemQuantity(item.id, cart);
  const dispatch = useAppDispatch();
  const defaultSize =
    cart.find((element) => element.id === item.id)?.size ||
    item.sizes.find((size) => size.name === ProductSizes.SMALL);
  const [selectedSize, setSelectedSize] = useState<Size>(defaultSize!);

  const defaultExtras =
    cart.find((element) => element.id === item.id)?.extras || [];

  const [selectedExtras, setSelectedExtras] = useState<Extra[]>(defaultExtras!);

  let totalPrice = item.basePrice;
  if (selectedSize) {
    totalPrice += selectedSize.price;
  }

  if (selectedExtras.length > 0) {
    for (const extra of selectedExtras) {
      totalPrice += extra.price;
    }
  }

  const handleAddToCart = () => {
    dispatch(
      addCartItem({
        basePrice: item.basePrice,
        id: item.id,
        image: item.image,
        name: item.name,
        size: selectedSize,
        extras: selectedExtras,
      }),
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={"lg"}
          type="button"
          className="rounded-full bg-orange-500 px-8 text-white"
        >
          <span>Add to cart</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-[425px]">
        <DialogHeader className="flex items-center">
          <Image src={item.image} alt={item.name} width={200} height={200} />
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription className="truncate text-center">
            {item.description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-10">
          <div className="space-y-4 text-center">
            <Label htmlFor="pick-size">Pick your size</Label>
            <PickSize
              sizes={item.sizes}
              item={item}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          </div>
          <div className="space-y-4 text-center">
            <Label htmlFor="add-extras">Any extras? </Label>

            <Extras
              extras={item.extras}
              selectedExtras={selectedExtras}
              setSelectedExtras={setSelectedExtras}
            />
          </div>
        </div>
        <DialogFooter>
          {quantity === 0 ? (
            <Button
              type="submit"
              onClick={handleAddToCart}
              className="h-10 w-full"
            >
              Add to cart {formatCurrency(totalPrice)}
            </Button>
          ) : (
            <ChooseQuantity
              quantity={quantity}
              item={item}
              selectedSize={selectedSize}
              selectedExtras={selectedExtras}
            />
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddToCartButton;
