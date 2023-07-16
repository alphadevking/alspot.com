import Motion from "../../animations/motion"
import { Typewriter } from "../../animations/typewriter"
import { variants } from "../../animations/variants"
import { FaDownload } from "react-icons/fa"

const Hello = () => {
    return (
        <Motion variant={variants.fadeInView} className="grid gap-8 p-0 md:p-5 py-5">

            <Typewriter className="text-3xl" text="Hello_"/>

            <div className="text-justify">
                I am a professional frontend web developer with expertise in scripting languages, multimedia web technologies, and the latest industry standards. I hold a Bachelors degree in Computer Science and have practical experience in computer networking. As a tutor and intern, I have worked extensively on frontend web development, specializing in technologies such as React, TypeScript, and Web3 (Blockchain). With a strong ability to construct fully integrated websites and a focus on delivering the best user experience. I am diligent, quick to learn, and a valuable team member. Proficient in HTML, CSS, TailwindCSS, Python, Vanilla JavaScript, Git, Gatsby and ReactJs, I am committed to writing efficient, reliable, and visually appealing code.
            </div>

            <a target='_blank' href={'/alphadevking.pdf'} className="flex gap-2 align-middle text-blue-500">
                <FaDownload className="mt-1"/>
                <span className="font-bold tracking-wide">DOWNLOAD CV</span>
            </a>

        </Motion>
    )
}

export default Hello
