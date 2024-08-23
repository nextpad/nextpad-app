import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/menu/Navbar";
import MenuButton from "./components/menu/MenuButton";
import { Web3Modal } from "./components/Web3Modal";

export const metadata: Metadata = {
   title: "Nextpad",
   description: "The next-gen of launchpad protocol",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" data-color-mode="light">
         <body>
            <Web3Modal>
               <Navbar />
               <div className="px-32 mb-0 pt-10 bg-base-200">
                  {children}
                  <MenuButton />
               </div>
               <Footer />
            </Web3Modal>
         </body>
      </html>
   );
}
