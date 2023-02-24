import { motion } from "framer-motion";
import { GlobalTypes } from "../globals";

function FadeInView({ className, children, delay = 0.5 } : GlobalTypes) {
    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: {delay} },
    };

    return (
        <motion.div className={`${className} transition-all duration-300`} initial="hidden" animate="visible" variants={fadeInVariants}>
            {children}
        </motion.div>
    );
}

export default FadeInView;
