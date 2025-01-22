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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/formatters";
import { Checkbox } from "../ui/checkbox";

const sizes = [
  { id: crypto.randomUUID(), name: "Small", price: 0 },
  { id: crypto.randomUUID(), name: "Medium", price: 5 },
  { id: crypto.randomUUID(), name: "Large", price: 7 },
];

const extras = [
  { id: crypto.randomUUID(), name: "Cheese", price: 4 },
  { id: crypto.randomUUID(), name: "Onion", price: 2 },
  { id: crypto.randomUUID(), name: "Pepper", price: 3 },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AddToCartButton({ item }: { item: any }) {
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
          <DialogDescription className="text-center">
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-10">
          <div className="space-y-4 text-center">
            <Label htmlFor="pick-size">Pick your size</Label>
            <PickSize sizes={sizes} item={item} />
          </div>
          <div className="space-y-4 text-center">
            <Label htmlFor="add-extras">Any extras? </Label>

            <Extras extras={extras} item={item} />
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

function PickSize({ sizes, item }: { sizes: any; item: any }) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 rounded-md border border-gray-100 p-4"
        >
          <RadioGroupItem value={size.price} id={size.id} />
          <Label htmlFor={size.id}>
            {size.name} {formatCurrency(item.basePrice + size.price)}{" "}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

function Extras({ extras, item }: { extras: any; item: any }) {
  return (
    <>
      {extras.map((extra) => (
        <div
          key={extra.id}
          className="flex items-center space-x-2 rounded-md border border-gray-100 p-4"
        >
          <Checkbox id={extra.id} />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {extra.name} {formatCurrency(extra.price)}
          </label>
        </div>
      ))}
    </>
  );
}
