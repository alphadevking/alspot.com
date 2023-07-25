import { useRef, useEffect } from "react";
import { useSpring, animated } from 'react-spring';

interface LoadingProps {
    size: number;
    className?: string;
}

function Loading({ size, className = "" }: LoadingProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Check size prop validity
    useEffect(() => {
        if (isNaN(size) || size < 0 || size > 100) {
            console.error("Invalid 'size' prop passed to Loading component. Please provide a number between 0 and 100.");
        }
    }, [size]);

    const containerSpring = useSpring({
        from: { width: "0%" },
        to: { width: `${Math.max(0, Math.min(100, size))}%` },
        config: { tension: 130, friction: 80 }
    });

    return (
        <div
            ref={containerRef}
            className={`max-w-md bg-gray-300 h-4 rounded-xl relative overflow-hidden ${className}`}
        >
            <animated.div
                style={{
                    ...containerSpring,
                    borderRadius: "0",
                    height: "100%",
                    background: "#000",
                    position: "absolute"
                }}
            >
                <span className={`px-1 text-xs float-right text-slate-100`}>
                    {Math.max(0, Math.min(100, size))}%
                </span>
            </animated.div>
        </div>
    );
}

export default Loading;
