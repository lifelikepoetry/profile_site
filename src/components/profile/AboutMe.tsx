import { TiltCard } from "./TiltCard";
import { motion } from "motion/react";
import {Oleo_Script } from "next/font/google";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const oleo_script = Oleo_Script({
    subsets: ['latin'],
    weight: ['400'],
})

export default function AboutMe() {
    const t = useTranslations('about');
    return (
        <motion.div
            id="about"
            className="flex h-screen w-full"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <div className="m-auto flex flex-col gap-4 items-center py-15 text-white w-[849px]">
                <p className={`${oleo_script.className} text-5xl font-bold text-center`}>{t('title')}</p>
                <div className="flex gap-4 items-center justify-between w-full bg-white/10 backdrop-blur-[4px] rounded-lg p-2">
                    <motion.span className="text-white/80 text-lg flex flex-col gap-7 w-full sm:w-3/4 text-center"
                        initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200, damping: 10, staggerChildren: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <p>{t('intro')}</p>
                        <p>{t('skills')}</p>
                        <p>{t('passion')}</p>
                        <p>{t('contact')}</p>
                    </motion.span>
                    <motion.div className="p-3 hidden sm:block"
                        initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200, damping: 10 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <TiltCard>
                            <Image
                                src='/coder-zh.jpg'
                                alt='coder-zh.jpg'
                                width={267}
                                height={356}
                                className='object-cover'
                            />
                        </TiltCard>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}