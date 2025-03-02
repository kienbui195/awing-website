import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import LoadingScreen from "@/components/layout/loading/loading-screen";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const manrope = Manrope({
  subsets: ["vietnamese"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  fallback: ["system-ui", "arial"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "AWing Website",
  description: "Awing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${manrope.className} bg-black antialiased`}>
        <Header />
        <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
