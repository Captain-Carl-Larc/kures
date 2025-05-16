import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kures App",
  description: "An application to anonymously share inspiration and open up your creative mind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <h1 className="text-3xl font-bold">
              Kures
            </h1>
            <ul className="flex space-x-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer className="flex items-center justify-center p-4 bg-gray-800 text-white">
          <p>
            &copy; {new Date().getFullYear()} Kures. All rights reserved.
            <br />
          </p>
        </footer>
      </body>
    </html>
  );
}
