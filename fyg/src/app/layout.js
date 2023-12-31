import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Find Your Game",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
      <body className={inter.className}>
        <Navbar />
        <div className="global">
            {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
