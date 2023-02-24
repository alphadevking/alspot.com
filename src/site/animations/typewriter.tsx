import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { GlobalTypes } from "../globals";

export function Typewriter({ className, text } : GlobalTypes) {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });
    const [textToShow, setTextToShow] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setTextToShow((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [inView, text]);

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={className}
        >
            {textToShow}
        </motion.span>
    );
};
