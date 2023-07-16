import { useRef } from "react";
import { useSpring, animated } from 'react-spring';

interface LoadingProps {
    size: number;
    className?: string;
}

function Loading({ size, className }: LoadingProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const containerSpring = useSpring({
        from: { x: "-100%" },
        to: { x: "0%" },
        config: { duration: 500 }
    });

    return (
        <div
            ref={containerRef}
            className={`max-w-md bg-gray-300 h-4 rounded-xl relative overflow-hidden ${className}`}
        >
            <animated.div
                style={{
                    width: containerSpring.x.to(() => `${size}%`),
                    borderRadius: "0",
                    height: "100%",
                    background: "#000",
                    position: "absolute"
                }}
            >
                <span className={`px-1 text-xs float-right text-slate-100`}>
                    {size}%
                </span>
            </animated.div>
        </div>
    );
}

export default Loading;
