import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { GlobalTypes } from "../globals";

export function Typewriter({ className, text }: GlobalTypes) {
    const [ref, inView] = useInView({
        threshold: 1,
        triggerOnce: false,
    });
    const [textToShow, setTextToShow] = useState("");

    const animationProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: inView ? 1 : 0 },
        config: { duration: 1000 },
    });

    useEffect(() => {
        let i = -1;
        let interval: number | undefined;

        if (inView) {
            interval = setInterval(() => {
                i++;
                setTextToShow((prev) => prev + text.charAt(i));

                if (i === text.length - 1) {
                    clearInterval(interval);
                }
            }, 300);
        } else {
            setTextToShow("");
        }

        return () => clearInterval(interval);
    }, [inView, text]);

    return (
        <>
            <animated.div ref={ref} className={className} style={animationProps}>
                {textToShow.split("").map((char, index) => (
                    <span key={index}>{char}</span>
                ))}
            </animated.div>
        </>
    );
}
