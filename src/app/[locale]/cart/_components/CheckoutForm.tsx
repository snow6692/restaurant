"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getTotalAmount } from "@/lib/cart";
import { formatCurrency } from "@/lib/formatters";
import { selectCartItems } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

function CheckoutForm() {
  const cart = useAppSelector(selectCartItems);
  const totalAmount = getTotalAmount(cart);

  if (cart && cart.length > 0) {
    return (
      <div className="grid gap-6 rounded-md bg-gray-100 p-4">
        <h2 className="text-2xl font-semibold">Checkout</h2>
        <form>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <Label htmlFor="phone" className="text-accent">
                Phone
              </Label>
              <Input
                id="phone"
                placeholder="Enter your phone"
                type="text"
                name="phone"
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="address" className="text-accent">
                Street address
              </Label>
              <Textarea
                id="address"
                placeholder="Enter your address"
                name="address"
                className="resize-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-1">
                <Label htmlFor="postal-code" className="text-accent">
                  Postal code
                </Label>
                <Input
                  type="text"
                  id="postal-code"
                  placeholder="Enter postal code"
                  name="postal-code"
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="city" className="text-accent">
                  City
                </Label>
                <Input
                  type="text"
                  id="city"
                  placeholder="Enter your City"
                  name="city"
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="country" className="text-accent">
                  Country
                </Label>
                <Input
                  type="text"
                  id="country"
                  placeholder="Enter your country"
                  name="country"
                />
              </div>
            </div>
            <Button className="mt-5 h-10">
              Pay {formatCurrency(totalAmount)}
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return <p> Add items to buy.</p>;
}

export default CheckoutForm;
