import { GlobalTypes } from './../globals/index';
import { SpringConfig } from 'react-spring';

export interface MotionProps extends GlobalTypes {
    variant?: SpringConfig;
}

export const variants = {
    fadeInView: {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
    fadeInFromDown: {
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
    },
    fadeInFromUp: {
        from: { opacity: 0, y: -100 },
        to: { opacity: 1, y: 0 },
    },
    fadeInFromLeft: {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0 },
    },
    fadeInFromRight: {
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0 },
    },
    slideInFromLeft: {
        from: { x: -100 },
        to: { x: 0 },
    },
    slideInFromRight: {
        from: { x: 100 },
        to: { x: 0 },
    },
};
