import {
    Reactjs, Nextjs, Tailwindcss, Nodejs,
    Redis, Mysql, Java, Springboot, JavaScript, TypeScript, Nestjs, Prisma
} from "@/components/profile/skills-icon";
import React from 'react';
import { motion, Variants } from "motion/react";
import GmailFoot from "@/components/profile/footer-icon/GmailFoot";
import TwitterFoot from "@/components/profile/footer-icon/TwitterFoot";
import GithubFoot from "@/components/profile/footer-icon/GithubFoot";
import WechatFoot from "@/components/profile/footer-icon/WechatFoot";
import { div } from "motion/react-client";

const skills = [
    { name: "React", icon: Reactjs },
    { name: "Next.js", icon: Nextjs },
    { name: "Tailwindcss", icon: Tailwindcss },
    { name: "JavaScript", icon: JavaScript },
    { name: "TypeScript", icon: TypeScript },
    { name: "Node.js", icon: Nodejs },
    { name: "Nest.js", icon: Nestjs },
    { name: "Java", icon: Java },
    { name: "Springboot", icon: Springboot },
    { name: "MySQL", icon: Mysql },
    { name: "Redis", icon: Redis },
    { name: "Prisma", icon: Prisma },
]

const variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, delay: 0.3, staggerChildren: 0.2 } }
}

const child: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};


export default function SkillsList() {

    return (

        <motion.div id="skills" className="h-screen w-full flex"
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: false, amount: 0.3 }}
        >
            <div className="m-auto flex flex-col gap-5 items-center bg-white/10 backdrop-blur-[4px] rounded-lg p-2 text-white">
                <p className="text-2xl font-bold">Skills</p>
                <motion.div className="flex flex-wrap items-center justify-center gap-10 font-normal text-lg text-white/80 max-w-xl">
                    {skills.map((skill) => (
                        <motion.div key={skill.name} className="flex flex-col items-center gap-2"
                            variants={child}
                            whileHover={{ scale: 1.3, y: -10, color: 'black', transition: { duration: 0.2 } }}
                        >
                            <skill.icon width={64} height={64} />
                            <span className="w-[97px] text-center">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </motion.div>

    )
}