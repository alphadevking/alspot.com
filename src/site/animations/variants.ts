export const Variants = {
    fadeInView: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    fadeInFromLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    fadeInFromRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
    slideInFromLeft: {
        hidden: { x: -100 },
        visible: { x: 0 },
    },
    slideInFromRight: {
        hidden: { x: 100 },
        visible: { x: 0 },
    }
}