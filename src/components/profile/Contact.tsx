"use client";

import { motion, Variants } from "motion/react";
import { Gmail, Twitter, Github, WeChat } from "@/components/profile/contact-icon";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // 每个图标延迟 0.15s
    },
  },
};

const child: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(15px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};

export default function Contact() {
  return (
    <motion.div
      className="flex gap-4"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {[Gmail, Twitter, Github, WeChat].map((Icon, index) => (
        <motion.div key={index} variants={child}>
          <Icon width={48} height={48} className="cursor-pointer" whileHoverOptions={{ scale: 1.3, y:-10, transition: {duration: 0.2} }} />
        </motion.div>
      ))}
    </motion.div>
  );
}
