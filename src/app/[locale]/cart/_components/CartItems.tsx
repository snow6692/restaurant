// "use client";

// import { Button } from "@/components/ui/button";
// import { deliveryFee, getSubTotal } from "@/lib/cart";
// import { formatCurrency } from "@/lib/formatters";
// import {
//   removeItemFromCart,
//   selectCartItems,
// } from "@/redux/features/cart/cartSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { Trash2 } from "lucide-react";
// import Image from "next/image";
// import { useEffect } from "react";

// function CartItems() {
//   const cart = useAppSelector(selectCartItems);
//   const dispatch = useAppDispatch();
//   const subTotal = getSubTotal(cart);

//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cart));
//   }, [cart]);

//   return (
//     <div>
//       {cart && cart.length > 0 ? (
//         <>
//           <ul>
//             {cart.map((item) => (
//               <li key={item.id}>
//                 <div className="flex flex-col justify-between gap-6 md:flex-row">
//                   <div className="flex items-center gap-2">
//                     <div className="relative h-24 w-24">
//                       <Image
//                         src={item.image}
//                         className="object-contain"
//                         alt={item.name}
//                         fill
//                       />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold md:text-lg">{item.name}</h4>
//                       <div className="relative">
//                         {item.size && (
//                           <span className="text-sm">
//                             Size: {item.size.name}
//                           </span>
//                         )}
//                         {item.extras && item.extras.length > 0 && (
//                           <div className="flex gap-1">
//                             <span>Extras:</span>
//                             <ul>
//                               {item.extras.map((extra) => (
//                                 <li key={extra.id}>
//                                   <span className="text-sm">
//                                     {extra.name} {formatCurrency(extra.price)}
//                                   </span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         )}
//                         <span className="absolute right-0 top-0 text-sm text-black">
//                           x{item.quantity}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-1 items-center justify-end gap-4">
//                     <strong className="text-black">
//                       {formatCurrency(item.basePrice)}
//                     </strong>
//                     <Button
//                       onClick={() =>
//                         dispatch(removeItemFromCart({ id: item.id }))
//                       }
//                       variant="secondary"
//                       className="border"
//                     >
//                       <Trash2 />
//                     </Button>
//                   </div>
//                 </div>
//               </li>
//             ))}

//             {/*  */}
//           </ul>
//           <div className="flex flex-col items-end justify-end pt-6">
//             <span className="font-medium">
//               Subtotal:
//               <strong className="text-black">{formatCurrency(subTotal)}</strong>
//             </span>
//             <span className="font-medium">
//               Delivery:
//               <strong className="text-black">
//                 {formatCurrency(deliveryFee)}
//               </strong>
//             </span>
//             <span className="font-medium">
//               Total:
//               <strong className="text-black">
//                 {formatCurrency(subTotal + deliveryFee)}
//               </strong>
//             </span>
//           </div>
//         </>
//       ) : (
//         <p className="">There are no items in your cart. Add some</p>
//       )}
//     </div>
//   );
// }

// export default CartItems;

"use client";

import { Button } from "@/components/ui/button";
import { deliveryFee, getSubTotal } from "@/lib/cart";
import { formatCurrency } from "@/lib/formatters";
import {
  initializeCart,
  removeItemFromCart,
  selectCartItems,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

function CartItems() {
  const cart = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const subTotal = getSubTotal(cart);

  useEffect(() => {
    // Load cart items from localStorage on the client
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      dispatch(initializeCart(JSON.parse(storedCart)));
    }
  }, [dispatch]);

  useEffect(() => {
    // Save cart items to localStorage whenever it changes
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      {cart && cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div className="flex flex-col justify-between gap-6 md:flex-row">
                  <div className="flex items-center gap-2">
                    <div className="relative h-24 w-24">
                      <Image
                        src={item.image}
                        className="object-contain"
                        alt={item.name}
                        fill
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold md:text-lg">{item.name}</h4>
                      <div className="relative">
                        {item.size && (
                          <span className="text-sm">
                            Size: {item.size.name}
                          </span>
                        )}
                        {item.extras && item.extras.length > 0 && (
                          <div className="flex gap-1">
                            <span>Extras:</span>
                            <ul>
                              {item.extras.map((extra) => (
                                <li key={extra.id}>
                                  <span className="text-sm">
                                    {extra.name} {formatCurrency(extra.price)}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <span className="absolute right-0 top-0 text-sm text-black">
                          x{item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-end gap-4">
                    <strong className="text-black">
                      {formatCurrency(item.basePrice)}
                    </strong>
                    <Button
                      onClick={() =>
                        dispatch(removeItemFromCart({ id: item.id }))
                      }
                      variant="secondary"
                      className="border"
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-end justify-end pt-6">
            <span className="font-medium">
              Subtotal:
              <strong className="text-black">{formatCurrency(subTotal)}</strong>
            </span>
            <span className="font-medium">
              Delivery:
              <strong className="text-black">
                {formatCurrency(deliveryFee)}
              </strong>
            </span>
            <span className="font-medium">
              Total:
              <strong className="text-black">
                {formatCurrency(subTotal + deliveryFee)}
              </strong>
            </span>
          </div>
        </>
      ) : (
        <p className="">There are no items in your cart. Add some</p>
      )}
    </div>
  );
}

export default CartItems;
