"use client"
import SkillsList from "@/components/profile/SkillsList";
import GmailFoot from "@/components/profile/footer-icon/GmailFoot";
import TwitterFoot from "@/components/profile/footer-icon/TwitterFoot";
import GithubFoot from "@/components/profile/footer-icon/GithubFoot";
import WechatFoot from "@/components/profile/footer-icon/WechatFoot";
import { motion } from "motion/react"
import Contact from "@/components/profile/Contact";
import AboutMe from "@/components/profile/AboutMe";
import Project from "@/components/profile/Project";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05 // 控制每个字符的延迟出现时间
        }
    }
};

const child = {
    hidden: { opacity: 0, y: 15, filter: "blur(20px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
};

export default function Profile() {
    const text = "Hi, I'm Longan Zhang! ";
    const text2 = "A Full Stack Engineer";
    const text3 = "Welcome to my personal page!";
    const text4 = ['Just', 'an', 'indie', 'Full-stack', 'developer', 'who', 'loves', 'to', 'build', 'something.'];
    return (
        <div className={`flex flex-col items-center px-10`}>
            <div id="home" className="flex flex-col items-center justify-center gap-10" style={{ height: 'calc(100vh - 64px)' }}>
                <motion.div
                    className="text-2xl font-bold flex flex-wrap"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                >
                    {text.split("").map((char, index) => (
                        <motion.span key={index} variants={child}>
                            {char === " " ? '\u00A0' : char}
                        </motion.span>
                    ))}
                    <motion.span variants={child}>
                        <motion.span
                            initial={{ rotate: 0 }}
                            style={{ transformOrigin: "70% 70%" }}
                            whileInView={{
                                rotate: [0, 30, 0],
                                transition: {
                                    duration: 0.5,
                                    repeat: 10,
                                    ease: "easeInOut",
                                }
                            }}
                            className="inline-block"
                        >
                            👋
                        </motion.span>
                    </motion.span>
                </motion.div>
                <motion.img src="/head.gif" alt="avatar" width={130} height={130}
                    initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, delay: 0.3 } }}
                    viewport={{ once: false, amount: 0.5 }}
                >

                </motion.img>
                <span className="text-3xl font-bold">
                    <motion.span
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        {text2.split("").map((char, index) => (
                            <motion.span key={index} variants={child}>
                                {char === " " ? '\u00A0' : char}
                            </motion.span>
                        ))}
                        <motion.span variants={child}> 👨‍💻</motion.span>
                    </motion.span>
                </span>
                <span className="text-center text-lg font-normal text-gray-600 leading-8">
                    <motion.span
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        {text3.split("").map((char, index) => (
                            <motion.span key={index} variants={child}>
                                {char === " " ? '\u00A0' : char}
                            </motion.span>
                        ))}
                    </motion.span>
                    <br />
                    <motion.span
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        {text4.map((word, index) => (
                            <motion.span key={index} variants={child}>
                                {word}&nbsp;
                            </motion.span>
                        ))}
                    </motion.span>
                </span>

                <Contact />

            </div>

            <AboutMe />

            <SkillsList />

            <Project />

            <div className="flex gap-4 items-center justify-between border-t-1 border-gray-300 pt-4 mt-40 pb-20 w-full">
                <span className="text-gray-500 text-m">&copy; 2025 Longan Zhang. All rights reserved</span>
                <div className="gap-4 text-gray-500 cursor-pointer hidden sm:flex">
                    <GmailFoot width={24} height={24} />
                    <TwitterFoot width={24} height={24} />
                    <GithubFoot width={24} height={24} />
                    <WechatFoot width={24} height={24} />
                </div>
            </div>
        </div>);
}