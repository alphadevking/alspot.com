import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GlobalTypes } from "../globals";

function Motion({ variants, className, children, delay = 0.2 }: GlobalTypes) {
    const [ref, inView] = useInView({
        threshold: 0.1, // Trigger animation when component is 30% visible
        triggerOnce: false, // Only trigger animation once
    });

    return (
        <motion.div
            ref={ref}
            className={`${className} transition-all duration-300`}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
}

export default Motion;
