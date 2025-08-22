"use client"
import { Neonderthaw } from "next/font/google";
import * as motion from "motion/react-client";
// import LiquidGlass from 'liquid-glass-react'

const neonderthaw = Neonderthaw({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Navbar() {
  return (<motion.div className={`h-16 w-full flex justify-between items-center px-5 py-3 fixed top-0 z-50`}
    initial={{ opacity: 0, y: -64, filter: "blur(10px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false, amount: 0.3 }}
  >
      <div className={`${neonderthaw.className} text-3xl font-bold`}>LonganZ</div>
      <div className="gap-5 font-bold hidden md:flex">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>
  </motion.div>);
}