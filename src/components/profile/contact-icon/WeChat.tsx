import { motion, TargetAndTransition } from "motion/react"   

export default function WeChat({ width, height, className, whileHoverOptions }: { width: number, height: number, className: string, whileHoverOptions: TargetAndTransition }) {
    return (
        <motion.svg xmlns="http://www.w3.org/2000/svg" 
        x="0px" y="0px" width={width} height={height} 
        viewBox="0 0 48 48" className={className}
        whileHover={whileHoverOptions}
        >
            <linearGradient id="Mmo7SUtG3BkDNtKK7Uc18a_g6K6MWJPKeyk_gr1" x1="2.874" x2="24.916" y1="5.771" y2="31.217" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#33c481"></stop><stop offset="1" stopColor="#21a366"></stop></linearGradient><path fill="url(#Mmo7SUtG3BkDNtKK7Uc18a_g6K6MWJPKeyk_gr1)" d="M18,6C9.2,6,2,12,2,19.5c0,4.3,2.3,8,6,10.5l-2,6l6.3-3.9C14,32.7,16,33,18,33	c8.8,0,16-6,16-13.5S26.8,6,18,6z"></path><path d="M19,29c0,1.371,0.283,2.684,0.779,3.912C27.749,32.167,34,26.487,34,19.5	c0-0.845-0.104-1.668-0.279-2.469C33.481,17.021,33.243,17,33,17C25.28,17,19,22.383,19,29z" opacity=".05"></path><path d="M19.5,29c0,1.35,0.289,2.641,0.793,3.846C28.014,31.908,34,26.335,34,19.5	c0-0.67-0.077-1.322-0.188-1.965C33.542,17.521,33.274,17.5,33,17.5C25.556,17.5,19.5,22.659,19.5,29z" opacity=".07"></path><linearGradient id="Mmo7SUtG3BkDNtKK7Uc18b_g6K6MWJPKeyk_gr2" x1="20.478" x2="43.542" y1="17.541" y2="38.647" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f0f0f0"></stop><stop offset="1" stopColor="#bbc1c4"></stop></linearGradient><path fill="url(#Mmo7SUtG3BkDNtKK7Uc18b_g6K6MWJPKeyk_gr2)" d="M46,29c0-6.1-5.8-11-13-11s-13,4.9-13,11s5.8,11,13,11c1.8,0,3.5-0.3,5-0.8l5,2.8l-1.4-4.8	C44.3,35.2,46,32.3,46,29z"></path><path fill="#135d36" d="M14,15c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S14,13.9,14,15z M24,13c-1.1,0-2,0.9-2,2s0.9,2,2,2	s2-0.9,2-2S25.1,13,24,13z"></path><path fill="#474747" d="M30,26.5c0,0.8-0.7,1.5-1.5,1.5S27,27.3,27,26.5s0.7-1.5,1.5-1.5S30,25.7,30,26.5z M37.5,25	c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S38.3,25,37.5,25z"></path>
        </motion.svg>
    )
}