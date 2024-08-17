import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Herman Østengen",
  description: "Herman's hjemmeside",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta name="robots" content="all" />
        <meta name="robots" content="noodp" />
        <meta name="robots" content="noarchive" />
      </head>
      <body className={roboto.className}>
        <Navbar />
        <div style={{ height: 120 }}></div>
        {children}
      </body>
    </html>
  );
}
