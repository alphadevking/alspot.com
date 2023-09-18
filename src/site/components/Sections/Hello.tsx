import Motion from "../../animations/motion"
import { Typewriter } from "../../animations/typewriter"
import { variants } from "../../animations/variants"
import { FaDownload } from "react-icons/fa"

const Hello = () => {
    return (
        <Motion variant={variants.fadeInView} className="grid gap-8 p-0 md:p-5 py-5">

            <Typewriter className="text-3xl" text="Hello_"/>

            <div className="text-justify">
                I am a proficient full-stack software engineer known for my ability to construct fully integrated websites from the ground up, ensuring exceptional user experiences. My educational background includes a Bachelor's degree from Ambrose Alli University, earned in 2023, which provided me with a solid foundation in computer science.
                Presently an intern at SMART EARNERS TEAM, I work as a web developer. In this capacity, I employ technologies such as React, TypeScript, and Web3 to craft dynamic and interactive web applications. I have a knack for swift learning and continuously strive to keep up with the latest industry standards and best practices.
                My skill set extends to scripting languages and multimedia web technologies, including proficiency in HTML 5.0, Bootstrap 5, CSS 3.0, Python, JavaScript, Git, TypeScript, and ReactJs. These abilities enable me to produce efficient and clean code that adheres to industry standards, delivering top-tier user experiences.
                In addition to my frontend capabilities, I've also honed my skills in backend development using Laravel and Django. I excel in integrating these frameworks seamlessly with frontend technologies like React, Vite, and Next.js, ensuring a cohesive and efficient web development process.
            </div>

            <a target='_blank' href={'/alphadevking.pdf'} className="flex gap-2 align-middle text-blue-500">
                <FaDownload className="mt-1"/>
                <span className="font-bold tracking-wide">DOWNLOAD CV</span>
            </a>

        </Motion>
    )
}

export default Hello
