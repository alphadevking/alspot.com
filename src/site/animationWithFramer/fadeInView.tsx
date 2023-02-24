import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GlobalTypes } from "../globals";

function FadeInView({ className, children, delay = 0.2 } : GlobalTypes) {
    const [ref, inView] = useInView({
        threshold: 0.3, // Trigger animation when component is 30% visible
        triggerOnce: false, // Only trigger animation once
    });

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
            ref={ref}
            className={`${className} transition-all duration-300`}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInVariants}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
}

export default FadeInView;
