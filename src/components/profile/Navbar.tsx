"use client";
import { Neonderthaw, Oleo_Script } from "next/font/google";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';

const neonderthaw = Neonderthaw({
  weight: ["400"],
  subsets: ["latin"],
});

const oleo_script = Oleo_Script({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Navbar() {
  const t = useTranslations('navbar');
  const [position, setPosition] = useState({ bottom: -8, left: 4 });
  const [activeSection, setActiveSection] = useState("home");

  // ✅ 监听 section 是否进入视口
  useEffect(() => {
    const sections = ["home", "projects", "about", "skills"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
                   entries.forEach((entry) => {
           if (entry.isIntersecting) {
             setActiveSection(id);
           }
         });
        },
        { threshold: 0.5 } // 50% 可见时触发
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // ✅ 根据 activeSection 动态移动下划线
  useEffect(() => {
    const positions: Record<string, number> = {
      home: 4,
      projects: 79,
      about: 155,
      skills: 217,
    };
    setPosition({ bottom: -8, left: positions[activeSection] });
  }, [activeSection]);

  return (
    <motion.div
      className={`h-16 w-full flex justify-center md:justify-between items-center px-5 py-3 fixed top-0 z-50 bg-white/20 backdrop-blur-sm text-white`}
      initial={{ opacity: 0, y: -64, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className={`${neonderthaw.className} text-3xl font-bold`}>
        Coder Zhang
      </div>
      <div
        className={`${oleo_script.className} relative gap-5 text-xl font-bold hidden md:flex`}
      >
        <a href="#home" className={cn("text-white/80", activeSection === "home" && "text-white")}>{t('home')}</a>
        <a href="#projects" className={cn("text-white/80", activeSection === "projects" && "text-white")}>{t('projects')}</a>
        <a href="#about" className={cn("text-white/80", activeSection === "about" && "text-white")}>{t('about')}</a>
        <a href="#skills" className={cn("text-white/80", activeSection === "skills" && "text-white")}>{t('skills')}</a>
        <div
          className={cn(
            "w-[30px] h-[6px] rounded-[30px] bg-white absolute -bottom-2 left-1 transition-all duration-300"
          )}
          style={{ bottom: position.bottom, left: position.left }}
        />
      </div>
    </motion.div>
  );
}
