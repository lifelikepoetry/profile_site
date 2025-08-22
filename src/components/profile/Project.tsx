"use client"
import { MorphingDialogBasic } from "./MorphingDialogBasic";
import { motion, Variants } from "motion/react";

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
            <div className="m-auto flex flex-col gap-4 items-center">
                <p className="text-2xl font-bold">Projects</p>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
                    <motion.div variants={child}>
                        <MorphingDialogBasic />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}