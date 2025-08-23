import React, { ReactNode } from "react";

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
}

const LiquidGlass: React.FC<LiquidGlassProps> = ({ children, className = "" }) => {
  return (
    <div className="relative w-full max-w-3xl rounded-3xl bg-white/10 backdrop-blur-2xl ring-1 ring-white/20 border border-white/10 glass-border p-8 md:p-12 [filter:url('#goo')] overflow-hidden">
      {/* 顶部高光 */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-70">
        <div className="absolute inset-x-0 top-0 h-16 rounded-t-3xl bg-white/30 blur-xl"></div>
      </div>

      {/* Gooey Filter 定义 */}
      <svg className="absolute" width="0" height="0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* 内部小液滴 */}
      <div className="absolute left-6 top-2 w-20 h-20 rounded-full bg-white/20 blur-xl animate-[float_5s_ease-in-out_infinite]" />
      <div
        className="absolute left-24 top-10 w-28 h-28 rounded-full bg-white/15 blur-xl animate-[float_6s_ease-in-out_infinite]"
        style={{ animationDelay: "-1.5s" }}
      />
      <div
        className="absolute left-44 top-4 w-16 h-16 rounded-full bg-white/10 blur-lg animate-[float_7s_ease-in-out_infinite]"
        style={{ animationDelay: "-0.7s" }}
      />

      {/* 用户传入的内容 */}
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
};

export default LiquidGlass;
