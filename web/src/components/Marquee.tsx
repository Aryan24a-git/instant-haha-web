"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
    text: string;
    className?: string;
    speed?: number;
}

export const Marquee = ({ text, className, speed = 20 }: MarqueeProps) => {
    return (
        <div className={cn("overflow-hidden bg-neo-black py-4 border-y-4 border-neo-black", className)}>
            <motion.div
                className="whitespace-nowrap flex"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
            >
                {[...Array(20)].map((_, i) => (
                    <span key={i} className="text-3xl font-bold uppercase mx-4 text-neo-yellow font-bungee tracking-wider">
                        {text} •
                    </span>
                ))}
            </motion.div>
        </div>
    );
};
