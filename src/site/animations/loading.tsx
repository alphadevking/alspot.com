import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface LoadingProps {
    size: number;
    className?: string;
}

function Loading({ size, className }: LoadingProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationControls = useAnimation();

    const containerVariants = {
        initial: {
            x: "-100%" // Initial position outside the container
        },
        animate: {
            x: "0%" // Animated position inside the container
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animationControls.start("animate");
                }
            },
            { threshold: 0.5 } // Adjust the threshold as needed
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [animationControls]);

    return (
        <div
            ref={containerRef}
            className={`max-w-md bg-gray-300 h-4 rounded-xl relative overflow-hidden ${className}`}
        >
            <motion.div
                style={{ width: `${size}%` }}
                className={`rounded-r-sm px-1 h-full bg-gray-800 absolute`}
                variants={containerVariants}
                initial="initial"
                animate={animationControls}
                transition={{ duration: 0.5 }}
            >
                <span className={`px-1 text-xs float-right text-slate-100`}>
                    {size}%
                </span>
            </motion.div>
        </div>
    );
}

export default Loading;
