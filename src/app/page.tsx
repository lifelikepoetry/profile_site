
"use client"
import SkillsList from "@/components/profile/SkillsList";
import AboutMe from "@/components/profile/AboutMe";
import Project from "@/components/profile/Project";
import Navbar from "@/components/profile/Navbar";
import General from "@/components/profile/General";
import Footer from "@/components/profile/Footer";




export default function Home() {

    return (
        <>
            <Navbar />

            <div className={`flex flex-col items-center`}>
                <General />

                <Project />

                <AboutMe />

                <SkillsList />

                <Footer />
            </div>
        </>
    );
}
