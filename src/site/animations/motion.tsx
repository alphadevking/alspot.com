import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { MotionProps } from "./variants";

function Motion({ className, children }: MotionProps) {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const animationProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: inView ? 1 : 0 },
        config: { duration: 500, delay: 50 },
    });

    return (
        <animated.div
            ref={ref}
            className={`${className} transition-all duration-300`}
            style={animationProps}
        >
            {children}
        </animated.div>
    );
}

export default Motion;
