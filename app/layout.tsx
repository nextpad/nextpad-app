import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/menu/Navbar";
import MenuButton from "./components/menu/MenuButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "The Open Launchpad",
   description: "The main app of TOL platform",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className="min-h-screen">
            <Navbar />
            <div className="px-32 py-10">{children}</div>
            <MenuButton />
         </body>
      </html>
   );
}
