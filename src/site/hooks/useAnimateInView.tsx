import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useAnimateInView = (variants: any) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
    });
    const [animation, setAnimation] = useState("initial");

    useEffect(() => {
        if (inView) {
            setAnimation("animate");
        } else {
            setAnimation("initial");
        }
    }, [inView]);

    const Component = motion.div;
    return <Component ref={ref} initial="initial" animate={animation} exit="initial" variants={variants} />;
};
