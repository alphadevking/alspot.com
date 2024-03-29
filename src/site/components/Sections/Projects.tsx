import Motion from "../../animations/motion"
import { Typewriter } from "../../animations/typewriter"
import { variants } from "../../animations/variants"
import Project_card from "./project_card/project_card"

const MyProjects = () => {
    return (
        <Motion variant={variants.fadeInView} className="grid gap-8 p-0 md:p-5 py-5">

            <Typewriter className="text-3xl" text="My Projects_"/>

            <div>
                <Project_card/>
            </div>

        </Motion>
    )
}

export default MyProjects
