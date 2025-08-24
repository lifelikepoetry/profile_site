"use client";

import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isHovered, setIsHovered] = useState(false);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <motion.div
      className="fixed top-[68px] right-1 z-50 flex gap-1"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >

      {locale === 'zh' ? (
        <motion.button
          className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-300 bg-white/20 text-white backdrop-blur-sm`}
          onClick={() => handleLanguageChange('en')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          EN
        </motion.button>
      ) : (
        <motion.button
          className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-300 bg-white/10 text-white/70 hover:bg-white/15 hover:text-white/90`}
          onClick={() => handleLanguageChange('zh')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          中
        </motion.button>
      )}

    </motion.div>
  );
}
