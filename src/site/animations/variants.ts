import { GlobalTypes } from './../globals/index';
import { SpringConfig } from 'react-spring';

export interface MyAnimationConfig {
    from: object;
    to: object;
    config?: SpringConfig;  // Use SpringConfig type as it contains spring physics configs
}

export interface MotionProps extends GlobalTypes {
    variant?: MyAnimationConfig;
}

export const variants = {
    fadeInView: {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { tension: 170, friction: 26 }  // Added config object to the variants
    },
    fadeInFromDown: {
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        config: { tension: 170, friction: 26 }
    },
    fadeInFromUp: {
        from: { opacity: 0, y: -100 },
        to: { opacity: 1, y: 0 },
        config: { tension: 170, friction: 26 }
    },
    fadeInFromLeft: {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0 },
        config: { tension: 170, friction: 26 }
    },
    fadeInFromRight: {
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0 },
        config: { tension: 170, friction: 26 }
    },
    slideInFromLeft: {
        from: { x: -100 },
        to: { x: 0 },
        config: { tension: 170, friction: 26 }
    },
    slideInFromRight: {
        from: { x: 100 },
        to: { x: 0 },
        config: { tension: 170, friction: 26 }
    },
};
