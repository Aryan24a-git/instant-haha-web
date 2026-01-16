"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    // Hide on mobile (touch devices usually don't have hover, or it's messy)
    // Simple check for width or pointer capabilities could work, but CSS media query is safer for visibility.
    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
            animate={{ x: position.x - 16, y: position.y - 16 }}
            transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
            style={{
                display: isVisible ? "block" : "none",
            }}
        >
            <div className="text-3xl">🍕</div>
        </motion.div>
    );
};
