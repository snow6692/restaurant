import BestSellers from "@/components/home/BestSellers";
import Hero from "@/components/home/Hero";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translate";

export default async function Home() {
  const locale = await getCurrentLocale();

  const { welcome } = await getTrans(locale);
  return (
    <main>
      <h2 className="text-4xl"> {welcome}</h2>
      <Hero />
      <BestSellers />
    </main>
  );
}
