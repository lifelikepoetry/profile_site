"use client"
import GmailFoot from "@/components/profile/footer-icon/GmailFoot";
import TwitterFoot from "@/components/profile/footer-icon/TwitterFoot";
import GithubFoot from "@/components/profile/footer-icon/GithubFoot";
import WechatFoot from "@/components/profile/footer-icon/WechatFoot";
import { MorphingDialogBasic } from "./MorphingDialogBasic";
import { motion, Variants } from "motion/react";

const variants = {
    hidden: {opacity: 0, y: 30, filter: "blur(10px)"},
    visible: {opacity: 1, y: 0, filter: "blur(0px)", transition: {duration: 0.5, delay: 0.3, staggerChildren: 0.5}}
}

const child: Variants = {

    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };
  

export default function Project() {
    return (
        <motion.div id="projects" className="h-screen w-full flex flex-col gap-4 items-center py-15 bg-blue-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={variants}
        >
        <p className="text-2xl font-bold">Projects</p>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
            <motion.div variants={child}>
                <MorphingDialogBasic />
            </motion.div>
            <motion.div variants={child}>
                <MorphingDialogBasic />
            </motion.div>
            <motion.div variants={child}>
                <MorphingDialogBasic />
            </motion.div>
        </div>
        <div className="flex gap-4 items-center justify-between border-t-1 border-gray-300 pt-4 mt-40 pb-20 w-full">
                    <span className="text-gray-500 text-m">&copy; 2025 Longan Zhang. All rights reserved</span>
                    <div className="gap-4 text-gray-500 cursor-pointer hidden sm:flex">
                        <GmailFoot width={24} height={24} />
                        <TwitterFoot width={24} height={24} />
                        <GithubFoot width={24} height={24} />
                        <WechatFoot width={24} height={24} />
                    </div>
                </div>
    </motion.div>
    )
}