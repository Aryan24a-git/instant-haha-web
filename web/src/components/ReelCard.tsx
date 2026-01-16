"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Play, Instagram, Facebook, Youtube } from "lucide-react";

interface ReelCardProps {
    title: string;
    category: string;
    className?: string;
    color?: string;
    href?: string;
    thumbnail?: string; // New prop for image URL
    platform?: "instagram" | "facebook" | "youtube";
}

export const ReelCard = ({ title, category, className, color = "bg-neo-yellow", href = "#", platform = "instagram", thumbnail }: ReelCardProps) => {
    const Icon = platform === "instagram" ? Instagram : platform === "facebook" ? Facebook : Youtube;

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("relative w-64 h-96 border-4 border-neo-black bg-white flex-shrink-0 cursor-pointer overflow-hidden block group", className)}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {/* Thumbnail or Color Fallback */}
            {thumbnail ? (
                <div className="absolute inset-0">
                    <img src={thumbnail} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className={cn("absolute inset-0 opacity-20 mix-blend-overlay", color)}></div>
                </div>
            ) : (
                <div className={cn("absolute inset-0 opacity-20", color)}></div>
            )}

            {/* Phone Header Mockup */}
            <div className="absolute top-0 w-full h-8 border-b-4 border-neo-black bg-neo-black flex justify-center items-center">
                <div className="w-16 h-2 bg-white rounded-full"></div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 w-full p-4 border-t-4 border-neo-black bg-white z-10">
                <span className="inline-block px-2 py-1 bg-neo-black text-white text-xs font-bold mb-2 font-bungee uppercase">
                    {category}
                </span>
                <h3 className="text-xl font-bold font-baloo leading-tight">{title}</h3>
            </div>

            {/* Play Icon & Platform Logo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-white border-4 border-neo-black rounded-full flex items-center justify-center shadow-neo-sm transform transition-transform group-hover:scale-110">
                    <Icon className="text-neo-black w-8 h-8" />
                </div>
                <span className="font-bungee text-neo-black text-sm bg-white px-2 border-2 border-neo-black shadow-[2px_2px_0px_#000]">
                    ON {platform}
                </span>
            </div>
        </motion.a>
    );
};
