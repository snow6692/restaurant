import { formatCurrency } from "@/lib/formatters";
import { Checkbox } from "../ui/checkbox";
import { Extra } from "@prisma/client";

export default function Extras({ extras }: { extras: Extra[] }) {
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
