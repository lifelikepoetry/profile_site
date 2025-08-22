import {
    Reactjs, Nextjs, Tailwindcss, Nodejs,
    Redis, Mysql, Java, Springboot, JavaScript, TypeScript, Nestjs
} from "@/components/profile/skills-icon";
import React from 'react';
import { motion, Variants } from "motion/react";


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
        <motion.div id="skills" className="h-screen w-full flex bg-teal-300"
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: false, amount: 0.3 }}
        >
            <div className="m-auto flex flex-col gap-5 items-center">
                <p className="text-2xl font-bold">Skills</p>
                <motion.div className="flex flex-wrap items-center justify-center gap-10 font-normal text-lg text-gray-600 max-w-xl">
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