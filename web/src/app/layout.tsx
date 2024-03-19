import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./global-components/navbar/navbar";
import Footer from "./global-components/footer/footer";
import { Flowbite } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carbon Los Leños",
  description: "Desarrollado por WAM!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Flowbite>
          <Navbar />
          {children}
          <Footer />
        </Flowbite>
      </body>
    </html>
  );
}
