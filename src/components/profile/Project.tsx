"use client"
import { MorphingDialogBasic } from "./MorphingDialogBasic";
import { motion, Variants } from "motion/react";
import { Oleo_Script } from "next/font/google";
import { TiltCard } from "./TiltCard";

const oleo_script = Oleo_Script({
    subsets: ['latin'],
    weight: ['400'],
})


const variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, delay: 0.3, staggerChildren: 0.5 } }
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
        <motion.div id="projects" className="h-screen w-full flex py-15"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={variants}
        >
            <div className="m-auto flex flex-col gap-4 items-center text-white">
                <p className={`${oleo_script.className} text-5xl font-bold`}>Projects</p>
                <div className="flex flex-wrap justify-center gap-4 mt-10">
                    <motion.div variants={child}>
                        <TiltCard rotationFactor={3} scale={1.02} y={-5}>
                            <div className="w-[952px] h-[330px] py-[50px] px-[32px]" style={{
                                backgroundImage: "url('/penpath-img.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}>
                                <div className="flex flex-col gap-6">
                                    <img src="/penpath-icon.png" alt="penpath-icon" className="w-[154px] h-[36px] object-cover" />
                                    <span className="flex flex-col gap-6 text-[#4E475E]">
                                        <p className="text-[16px] leading-[24px]">
                                            PEN-PATH
                                        </p>
                                        <p className=" text-[24px] leading-[24px] font-bold">
                                            一款日记分享社交平台
                                        </p>
                                        <p className="text-[16px] leading-[24px]">
                                            鼓励用户分享每日心情，每日一记，记录生活点滴。
                                        </p>
                                    </span>
                                    <button className="w-[98px] h-[36px] py-2 px-4 bg-[#7C3AED] text-white rounded-[6px] flex items-center justify-center cursor-pointer"
                                        onClick={() => {
                                            window.open("http://penpath.coder-zh.top/", "_blank");
                                        }}>立即查看</button>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}