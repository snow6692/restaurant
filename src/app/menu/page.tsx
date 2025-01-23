import Menu from "@/components/menu/Menu";
import { getProductsByCategory } from "@/server/db/products";
import React from "react";

async function page() {
  const categories = await getProductsByCategory();
  console.log(categories);
  return (
    <main>
      {categories.map((category) => (
        <section key={category.id} className="section-gap">
          <div className="container text-center">
            <h1 className="mb-6 text-4xl font-bold">{category.name}</h1>
            <Menu items={category.products} />
          </div>
        </section>
      ))}
    </main>
  );
}

export default page;
