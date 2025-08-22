"use client";

import { motion, Variants } from "motion/react";
import { Gmail, Twitter, Github, WeChat } from "@/components/profile/contact-icon";
import { addToast } from "@heroui/toast";

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

const contactInfo = [
  {
    icon: Gmail,
    href: "a1522077114@gmail.com",
    title: "Gmail",
  },
  
  {
    icon: Twitter,
    href: "https://x.com/zh_coder",
  },
  
  {
    icon: Github,
    href: "https://github.com/lifelikepoetry",
  },
  
  
  {
    icon: WeChat,
    href: "_LonganZ",
  },
]

export default function Contact() {
  const handleClick = (item: any) => {
    if (item.title === "Gmail") {
      // 邮箱复制到剪贴板
      navigator.clipboard.writeText(item.href);
      addToast({
        title: "Email copied to clipboard",
        description: "You can now paste it into your email client",
        color: "success",
      });
    } else if (item.title === "WeChat") {
      // 微信复制到剪贴板
      navigator.clipboard.writeText(item.href);
      addToast({
        title: "WeChat ID copied to clipboard",
        description: "You can now paste it into your WeChat",
        color: "success",
      });
    } else {
      window.open(item.href, "_blank");
    }
  };

  return (
    <motion.div
      className="flex gap-4"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {contactInfo.map((item, index) => (
        <motion.div key={index} variants={child} onClick={() => handleClick(item)}>
          <item.icon width={48} height={48} className="cursor-pointer" whileHoverOptions={{ scale: 1.3, y:-10, transition: {duration: 0.2} }} />
        </motion.div>
      ))}
    </motion.div>
  );
}
