import "./globals.css";
import Header from "@/components/header/Header";
import { Languages } from "@/constants/enums";
import ReduxProvider from "@/providers/ReduxProvider";

export async function generateStaticParams() {
  return [{ locale: Languages.ARABIC }, { locale: Languages.ENGLISH }];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <Header />
      {children}
    </ReduxProvider>
  );
}
