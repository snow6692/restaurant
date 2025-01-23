import MenuItem from "./MenuItem";
import { ProductWithRelations } from "@/types/product";

function Menu({ items }: { items: ProductWithRelations[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default Menu;
