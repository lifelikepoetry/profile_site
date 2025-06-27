"use client"
import { Neonderthaw } from "next/font/google";
import * as motion from "motion/react-client";
// import LiquidGlass from 'liquid-glass-react'

const neonderthaw = Neonderthaw({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Navbar() {
  return (<motion.div className={`bg-amber-50 h-16 flex justify-between items-center px-5 py-3 sticky top-0 z-50`}
    initial={{ opacity: 0, y: -64, filter: "blur(10px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false, amount: 0.3 }}
  >
      <div className={`${neonderthaw.className} text-3xl font-bold`}>LonganZ</div>
      <div className="flex gap-5 font-bold">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>
  </motion.div>);
}

// export default function Navbar() {
//   return (
//   // <motion.div className={`bg-amber-50 h-16 flex justify-between items-center px-5 py-3 sticky top-0 z-50`}
//   //   initial={{ opacity: 0, y: -64, filter: "blur(10px)" }}
//   //   animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//   //   transition={{ duration: 0.5 }}
//   //   viewport={{ once: false, amount: 0.3 }}
//   // >
//   <LiquidGlass style={{height: 64, width: '100vw', display:"flex", justifyContent:"space-between", alignItems:"center", padding: "0 16px", position:"sticky", top: 0, zIndex: 50}}>
//       <div className={`${neonderthaw.className} text-3xl font-bold`}>LonganZ</div>
//       <div className="flex gap-5 font-bold">
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#skills">Skills</a>
//         <a href="#projects">Projects</a>
//       </div>
//     </LiquidGlass>
// );
// }