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

function AddToCartButton({ item }: { item: ProductWithRelations }) {
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
            <PickSize sizes={item.sizes} item={item} />
          </div>
          <div className="space-y-4 text-center">
            <Label htmlFor="add-extras">Any extras? </Label>

            <Extras extras={item.extras} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="h-10 w-full">
            Add to cart{" "}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddToCartButton;
