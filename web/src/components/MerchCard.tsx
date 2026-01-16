"use client";

import { motion } from "framer-motion";

export const MerchCard = () => {
    return (
        <div className="relative group cursor-help">
            <div className="absolute inset-0 bg-neo-black translate-x-1 translate-y-1"></div>
            <div className="relative border-2 border-neo-black bg-white p-6 h-64 flex flex-col items-center justify-center overflow-hidden">

                {/* Mystery blur effect */}
                <div className="absolute inset-0 bg-neo-purple/20 backdrop-blur-md flex items-center justify-center z-10 group-hover:backdrop-blur-none transition-all duration-500">
                    <span className="bg-neo-yellow border-2 border-neo-black px-4 py-2 font-bungee text-xl rotate-12 shadow-neo-sm">
                        COMING SOON
                    </span>
                </div>

                <div className="w-32 h-32 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
                <h3 className="font-bungee text-xl">INSTANT T-SHIRT</h3>
                <p className="font-baloo text-sm text-gray-500">Limited Edition</p>
            </div>
        </div>
    );
};
