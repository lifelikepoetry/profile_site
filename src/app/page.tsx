
"use client"
import SkillsList from "@/components/profile/SkillsList";
import AboutMe from "@/components/profile/AboutMe";
import Project from "@/components/profile/Project";
import Navbar from "@/components/profile/Navbar";
import General from "@/components/profile/General";
import Footer from "@/components/profile/Footer";
import Image from "next/image";




export default function Home() {

    return (
        <>
            <Navbar />

            <Image src="/dali.jpg" fill alt="" className="w-full h-full object-cover fixed top-0 left-0 -z-10 pointer-events-none" />

            <div className={`flex flex-col items-center relative z-10`}>
                <General />

                <Project />

                <AboutMe />

                <SkillsList />

                <Footer />
            </div>
        </>
    );
}
