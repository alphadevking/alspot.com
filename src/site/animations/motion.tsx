import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { MotionProps } from "./variants";

function Motion({ className, children, variant }: MotionProps) {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const animationProps = useSpring({
        delay: 50,
        from: variant ? variant.from : { opacity: 0 },
        to: { opacity: inView ? 1 : 0 },
        config: { tension: 170, friction: 26 }, // Values to be tweaked for desired effect
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
