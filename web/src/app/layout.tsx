import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./global-components/navbar/navbar";
import Footer from "./global-components/footer/footer";
import MainProvider from "./providers/main-provider";

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
      <body>
        <MainProvider>
          <Navbar />
          {children}
          <Footer />
        </MainProvider>
      </body>
    </html>
  );
}
