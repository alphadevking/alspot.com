import Motion from "@/site/animations/motion"
import { Typewriter } from "@/site/animations/typewriter"
import { Variants } from "@/site/animations/variants"

const educationStats = [
    {institution: "Ambrose Alli University", duration: "2019 - 2023", course: "Bachelor, Computer Science"},
    { institution: "Aisotech Computers", duration: "January - March 2022 - Present", course: "Industrial Training in Computer Networking" }
]

const employmentStats = [
    {workplace: "Aisotech Computers", year: "2022", workTitle: "Tutor, Frontend Web Development"},
    { workplace: "Smart Earners Team", year: "September 2022 - Present", workTitle: "Intern, Web-Developer, working with React, typescript and Web3 technologies." },
]

const Resume = () => {
    return (
        <Motion variants={Variants.fadeInView} className="grid gap-8 p-0 md:p-5 py-5">

            <Typewriter text="Resume_" className="text-3xl" />

            <div className="flex flex-col">

                <Motion variants={Variants.fadeInFromLeft}>

                    <h3 className="text-sm py-5 font-bold mb-2 uppercase tracking-widest">
                        Education
                    </h3>

                    {
                        educationStats.map((val, key) => {
                            return (
                                <div className="py-3" key={key}>

                                    <div className="grid border-l-2 border-gray-500 p-4 gap-y-3">
                                        <div className="uppercase font-bold">{val.institution}</div>
                                        <div className="text-gray-500 text-xs">{val.duration}</div>
                                        <div className="font-normal text-sm">{val.course}</div>
                                    </div>

                                </div>
                            )
                        })
                    }

                </Motion>

                <Motion variants={Variants.fadeInFromRight}>

                    <h3 className="text-sm py-5 font-bold mb-2 uppercase tracking-widest">
                        Employment
                    </h3>

                    {
                        employmentStats.map((val, key) => {
                            return (
                                <div className="py-3" key={key}>

                                    <div className="grid border-l-2 border-gray-500 p-4 gap-y-3">
                                        <div className="uppercase font-bold">{val.workplace}</div>
                                        <div className="text-gray-500 text-xs">{val.year}</div>
                                        <div className="font-normal text-sm">{val.workTitle}</div>
                                    </div>

                                </div>
                            )
                        })
                    }

                </Motion>
                
            </div>

        </Motion>
    )
}

export default Resume
