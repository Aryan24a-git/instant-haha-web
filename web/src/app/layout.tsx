import type { Metadata } from "next";
import { Baloo_Da_2, Bungee } from "next/font/google"; // Using Bungee for that chunky header feel
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

const baloo = Baloo_Da_2({
  variable: "--font-baloo",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700", "800"], // Variable font usually, but being specific helps
});

const bungee = Bungee({
  variable: "--font-bungee",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Instant Haha - Bangalir Jibone Ektu Shanti",
  description: "The ultimate Bengali meme destination. Lyadh, Chaos, and Memes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baloo.variable} ${bungee.variable} antialiased cursor-none`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
