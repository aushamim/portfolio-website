import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Navbar/Nav";
import Footer from "./Components/Footer/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hi, Shamim here 👋",
  description: "Portfolio site of Amzud Uddin Shamim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
