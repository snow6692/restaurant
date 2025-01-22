import { data } from "@/constants/data";

import MenuItem from "./MenuItem";

function Menu() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3">
      {data.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export default Menu;
