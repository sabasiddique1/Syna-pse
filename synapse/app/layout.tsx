import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const excludedRoutes = ["/signup", "/admin"];
const pathname = typeof window !== "undefined" ? window.location.pathname : "";

const showHeaderAndFooter = !excludedRoutes.includes(pathname);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${inter.className} flex h-screen flex-col`}>
          {showHeaderAndFooter && <Header />}
            <main className="flex-1">{children}</main>
          {showHeaderAndFooter && <Footer />}
        </body>
    </html>
  );
}


