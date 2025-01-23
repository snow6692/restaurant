import { cache } from "@/lib/cache";
import prisma from "@/lib/prisma";

export const getBestSellers = cache(
  () => {
    const bestSellers = prisma.product.findMany({
      include: {
        sizes: true,
        extras: true,
      },
    });
    return bestSellers;
  },
  ["best-sellers"],
  { revalidate: 3600 },
); //hour
