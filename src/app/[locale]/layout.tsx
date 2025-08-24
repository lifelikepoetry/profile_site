import type { Metadata } from "next";
import "../globals.css";
import { Rubik } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile",
};

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={rubik.className} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
