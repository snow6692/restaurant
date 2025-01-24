import { formatCurrency } from "@/lib/formatters";
import { Checkbox } from "../ui/checkbox";
import { Extra } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export default function Extras({
  extras,
  setSelectedExtras,
  selectedExtras,
}: {
  extras: Extra[];
  selectedExtras: Extra[];
  setSelectedExtras: Dispatch<SetStateAction<Extra[]>>;
}) {
  const handleExtra = (extra: Extra) => {
    // unCheck
    if (selectedExtras.find((e) => e.id === extra.id)) {
      const filteredSelectedExtras = selectedExtras.filter(
        (item) => item.id !== extra.id,
      );
      setSelectedExtras(filteredSelectedExtras);
    }
    //check
    else {
      setSelectedExtras((prev) => [...prev, extra]);
    }
  };
  return (
    <>
      {extras.map((extra) => (
        <div
          key={extra.id}
          className="flex items-center space-x-2 rounded-md border border-gray-100 p-4"
        >
          <Checkbox
            id={extra.id}
            checked={Boolean(selectedExtras.find((e) => e.id === extra.id))}
            onClick={() => handleExtra(extra)}
          />
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
