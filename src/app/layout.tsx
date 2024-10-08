import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "World in Collision",
  description: "Site feito dedicado ao livro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen">
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
