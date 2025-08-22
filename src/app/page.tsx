
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
import Navbar from "@/components/profile/Navbar";
import General from "@/components/profile/General";



export default function Home() {

    return (
        <>
            <Navbar />

            <div className={`flex flex-col items-center`}>
                <General />

                <AboutMe />

                <SkillsList />

                <Project />
            </div>
        </>
    );
}
