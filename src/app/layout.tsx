import type { Metadata } from "next";
import "./globals.css";
import { Rubik, Oleo_Script } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

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
        <Toaster position='top-center'
          duration={3000}
          expand
          offset={32}
          className='flex justify-center'
          toastOptions={{
            style: {
              width: 'fit-content',
              padding: '16px 24px',
              fontWeight: '400',
              zIndex: 9999,
            }
          }} />
        {children}
      </body>
    </html>
  );
}
