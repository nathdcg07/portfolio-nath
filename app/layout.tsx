import type { Metadata } from "next";
import "./globals.css";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Urbanist } from "next/font/google";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Nath Portfolio",
  description: "El portafolio más aesthetic 💜✨",
  icons:{
    icon:'/other-icon.png'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} font-sans bg-black text-white`}>
        <Navbar />
        <Header />
         {children}
      </body>
    </html>
  );
}
