import React from "react";
import CartItems from "./_components/CartItems";
import CheckoutForm from "./_components/CheckoutForm";

function CartPage() {
  return (
    <main>
      <section className="section-gap">
        <div className="container">
          <h1 className="mb-10 text-center text-4xl font-bold italic">Cart</h1>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <CartItems />
            <CheckoutForm />
          </div>
        </div>
      </section>
    </main>
  );
}

export default CartPage;
