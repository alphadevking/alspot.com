import Motion from "@/site/animations/motion"
import { Typewriter } from "@/site/animations/typewriter"
import { Variants } from "@/site/animations/variants"
import Link from "next/link"
import { FaDownload } from "react-icons/fa"

const Hello = () => {
    return (
        <Motion variants={Variants.fadeInView} className="grid gap-8 p-0 md:p-5 py-5">

            <Typewriter className="text-3xl" text="Hello_"/>

            <div className="text-justify">
                I am a mid-level web developer with the ability to construct a fully integrated website from the bottom up with the best user experience. Professional, reliable, and efficient code writing skills employing the most recent Web development industry standards. Quick learner, diligent worker, and cooperative team member with expertise in a variety of scripting languages and multimedia Web technologies.
            </div>

            <Link href={'/'} className="flex gap-2 align-middle text-blue-500">
                <FaDownload className="mt-1"/>
                <span className="font-bold tracking-wide">DOWNLOAD CV</span>
            </Link>

        </Motion>
    )
}

export default Hello
