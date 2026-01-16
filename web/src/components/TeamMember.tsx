"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Instagram } from "lucide-react";

interface TeamMemberProps {
    name: string;
    role: string;
    instagram: string;
    color?: string;
    className?: string;
}

export const TeamMember = ({ name, role, instagram, color = "bg-neo-yellow", className }: TeamMemberProps) => {
    return (
        <motion.div
            className={cn("bg-white border-3 border-neo-black p-4 flex flex-col items-center text-center shadow-neo-sm hover:shadow-neo transition-all", className)}
            whileHover={{ y: -5, rotate: 1 }}
        >
            <div className={cn("w-24 h-24 rounded-full border-3 border-neo-black mb-4 overflow-hidden bg-gray-200", color)}>
                {/* Placeholder for real image, using initials for now */}
                <div className="w-full h-full flex items-center justify-center text-2xl font-bungee">
                    {name.charAt(0)}
                </div>
            </div>

            <h3 className="text-xl font-bold font-bungee uppercase mb-1">{name}</h3>
            <p className="text-sm font-baloo mb-4 opacity-80 font-bold">{role}</p>

            <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 px-4 py-1 bg-neo-black text-white rounded-full text-sm font-bold hover:bg-neo-pink transition-colors"
            >
                <Instagram size={16} /> Follow
            </a>
        </motion.div>
    );
};
