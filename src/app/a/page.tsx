"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const backgrounds = [
  "url('/dali1.jpg')",
  "url('/dali2.jpg')",
  "url('/dali3.jpg')",
];

export default function ScrollBackground() {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(800); // 默认高度

  // 在客户端获取窗口高度
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
      
      const handleResize = () => {
        setWindowHeight(window.innerHeight);
      };
      
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div style={{ position: "relative", height: "300vh" }}>
      {backgrounds.map((bg, index) => {
        // 设置每个背景的滚动触发区
        const start = windowHeight * index;
        const end = windowHeight * (index + 1);

        // 将 scrollY 映射到 translateY 从 100% -> 0%
        const y = useTransform(scrollY, [start, end], ["100%", "0%"]);

        // 可选：渐显效果
        const opacity = useTransform(scrollY, [start, end - 100], [0, 1]);

        return (
          <motion.div
            key={index}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: bg,
              backgroundSize: "cover",
              backgroundPosition: "center",
              y: y,
              opacity: opacity,
              zIndex: -index,
            }}
          />
        );
      })}
      <div style={{ position: "relative", zIndex: 10, padding: "50px" }}>
        <section style={{ height: "100vh" }}>内容区 1</section>
        <section style={{ height: "100vh" }}>内容区 2</section>
        <section style={{ height: "100vh" }}>内容区 3</section>
      </div>
    </div>
  );
}
