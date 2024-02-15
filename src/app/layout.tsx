import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import "./globals.css";
import Link from "next/link";


export const runtime = "edge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F1 Data Analytics",
  description: "A web app to visualize F1 data from 1950 - 2023 ",
};

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }} className={'border-b-2 border-black'}>
      <div>
        <Link href={"/"}>
          F1 Data Analytics
        </Link>
      </div>
      <SignedIn>
        <UserButton afterSignOutUrl="/"/>
      </SignedIn>
      <SignedOut>
        <Link href={"/dashboard"}>
          Dashboard
        </Link>
        <SignInButton/>
      </SignedOut>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
