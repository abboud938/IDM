import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./components/transitionProvider";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IDM",
  description: "IDM Furniture Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
