import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative vsc-initialized">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
