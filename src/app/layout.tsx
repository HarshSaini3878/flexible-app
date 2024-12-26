"use client"
import NavBar from "../components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";

// export const metadata = {
//   title: "Car Hub",
//   description: "Discover world's best car showcase application",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative scroll-container">
        {/* Wrap the entire application with SessionProvider */}
        <SessionProvider>
          <NavBar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
