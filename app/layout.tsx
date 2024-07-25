import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/menu/Navbar";
import MenuButton from "./components/menu/MenuButton";
import { Web3Modal } from "./components/Web3Modal";

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
            <Web3Modal>
               <Navbar />
               <div className="px-32 py-10">{children}</div>
               <MenuButton />
            </Web3Modal>
         </body>
      </html>
   );
}
