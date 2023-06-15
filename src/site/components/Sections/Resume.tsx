import Loading from "@/site/animations/loading"
import Motion from "@/site/animations/motion"
import { Typewriter } from "@/site/animations/typewriter"
import { variants } from "@/site/animations/variants"

const educationStats = [
    {institution: "Ambrose Alli University", duration: "2019 - 2023", course: "Bachelor, Computer Science"},
    { institution: "Aisotech Computers", duration: "January - March 2022 - Present", course: "Industrial Training in Computer Networking" }
]

const employmentStats = [
    {workplace: "Aisotech Computers", year: "2022", workTitle: "Tutor, Frontend Web Development"},
    { workplace: "Smart Earners Team", year: "September 2022 - Present", workTitle: "Intern, Web-Developer, working with React, typescript and Web3 technologies." },
]

const skills = [
    {
        skill: "HTML 5.0", level: 80
    },
    {
        skill: "BOOTSTRAP 5", level: 80
    },
    {
        skill: "CSS 3.0", level: 70
    },
    {
        skill: "PYTHON", level: 80
    },
    {
        skill: "JAVASCRIPT", level: 85
    },
    {
        skill: "GIT", level: 90
    },
    {
        skill: "TYPESCRIPT", level: 95
    },
    {
        skill: "REACT JS", level: 95
    },
]

const Resume = () => {
    return (
        <Motion variant={variants.fadeInView} className="grid gap-8 p-0 md:p-5 py-5">

            <Typewriter text="Resume_" className="text-3xl" />

            <div className="flex flex-col">

                <div>

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

                </div>

                <div>

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

                </div>

                <Motion>

                    <h3 className="text-sm py-5 font-bold mb-2 uppercase tracking-widest">
                        General Skills
                    </h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {
                            skills.map((val, key) => {
                                return (
                                    <div className="py-3" key={key}>
                                        <div className="text-xs">{val.skill}</div>
                                        <Loading className='my-5 -z-10' size={val.level} />
                                    </div>
                                )
                            })
                        }
                    </div>

                </Motion>
                
            </div>

        </Motion>
    )
}

export default Resume
