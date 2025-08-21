import type { Metadata } from "next";
import "./globals.css";
import { Rubik } from "next/font/google";

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile",
};

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={rubik.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
