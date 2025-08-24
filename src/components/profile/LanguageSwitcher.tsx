"use client";

import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { motion } from 'motion/react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <motion.div
      className="fixed bottom-12 right-1 z-50 flex gap-1"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >

      {locale === 'zh' ? (
        <motion.button
          className={`rounded-full size-8 text-center text-xs font-medium transition-all duration-300 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white cursor-pointer`}
          onClick={() => handleLanguageChange('en')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          EN
        </motion.button>
      ) : (
        <motion.button
          className={`rounded-full size-8 text-center text-xs font-medium transition-all duration-300 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white cursor-pointer`}
          onClick={() => handleLanguageChange('zh')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          中
        </motion.button>
      )}

    </motion.div>
  );
}
