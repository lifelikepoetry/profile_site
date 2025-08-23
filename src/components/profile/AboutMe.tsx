import { TiltCard } from "./TiltCard";
import { motion } from "motion/react";
import {Oleo_Script } from "next/font/google";

const oleo_script = Oleo_Script({
    subsets: ['latin'],
    weight: ['400'],
})

export default function AboutMe() {
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
                <p className={`${oleo_script.className} text-5xl font-bold text-center`}>About me</p>
                <div className="flex gap-4 items-center justify-between w-full bg-white/10 backdrop-blur-[4px] rounded-lg p-2">
                    <motion.span className="text-white/80 text-lg flex flex-col gap-7 w-full sm:w-3/4 text-center"
                        initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200, damping: 10, staggerChildren: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <p>👋 Hi, I&apos;m Longan Zhang, a full-stack developer with 4 years of experience, currently based in  🇨🇳 Yunnan, China.</p>
                        <p>💻 I specialize in building modern frontend apps with React, Next.js, TypeScript, and Tailwind CSS, and robust backends using Node.js, Nest.js, Java, Spring Boot, and Spring Cloud. I&apos;m also experienced with Postgres, MySQL and Redis.</p>
                        <p>🚀 I love turning ideas into real products, focusing on performance, scalability, and clean architecture. Always learning, always building.</p>
                        <p>💬 If you like my projects, feel free to contact me, and let&apos;s learn together.</p>
                    </motion.span>
                    <motion.div className="p-3 hidden sm:block"
                        initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200, damping: 10 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <TiltCard>
                            <img
                                src='/coder-zh.jpg'
                                alt='coder-zh.jpg'
                                className='h-[356px] w-[267px] object-cover'
                            />
                        </TiltCard>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}