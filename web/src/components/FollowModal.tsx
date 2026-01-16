"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FollowModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const FollowModal = ({ isOpen, onClose }: FollowModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            exit={{ scale: 0.8, rotate: 10, opacity: 0 }}
                            transition={{ type: "spring", damping: 12, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-md bg-neo-yellow border-4 border-neo-black shadow-neo p-8 text-center"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-2 right-2 p-1 bg-white border-2 border-neo-black hover:bg-red-400 transition-colors"
                                aria-label="Close"
                            >
                                <X size={24} />
                            </button>

                            <h2 className="text-4xl font-bungee mb-2">FOLLOW US!</h2>
                            <p className="font-baloo text-xl mb-8">Join the chaos on your favorite platform 🤪</p>

                            <div className="flex flex-col gap-4">
                                <SocialButton
                                    href="https://www.instagram.com/instant_haha?igsh=MWc1amsya3BrOGdxbQ=="
                                    icon={<InstagramIcon />}
                                    label="Instagram"
                                    color="bg-neo-pink hover:bg-pink-400 text-neo-black"
                                />
                                <SocialButton
                                    href="https://www.facebook.com/profile.php?id=61585844837775"
                                    icon={<FacebookIcon />}
                                    label="Facebook"
                                    color="bg-neo-blue hover:bg-blue-400 text-white"
                                />
                                <SocialButton
                                    href="https://m.youtube.com/@instanthaha_official"
                                    icon={<YoutubeIcon />}
                                    label="YouTube"
                                    color="bg-red-500 hover:bg-red-400 text-white"
                                />
                            </div>

                            <div className="mt-8 text-sm font-bold opacity-60">
                                Warning: Excessive laughter may cause stomach pain.
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

interface SocialButtonProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    color: string;
}

const SocialButton = ({ href, icon, label, color }: SocialButtonProps) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, x: 5 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
            "flex items-center gap-4 px-6 py-4 border-3 border-neo-black shadow-neo-sm font-bungee text-xl transition-all",
            color
        )}
    >
        <div className="bg-white border-2 border-neo-black p-2 rounded-full shadow-sm flex items-center justify-center w-12 h-12">
            {icon}
        </div>
        <span>{label}</span>
    </motion.a>
);

// Custom Brand Icons
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="url(#instaGradient)">
        <defs>
            <linearGradient id="instaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fdf497" />
                <stop offset="5%" stopColor="#fdf497" />
                <stop offset="45%" stopColor="#fd5949" />
                <stop offset="60%" stopColor="#d6249f" />
                <stop offset="90%" stopColor="#285AEB" />
            </linearGradient>
        </defs>
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="24" height="24" fill="#1877F2">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
);

const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24" fill="#FF0000">
        <path d="M549.655 124.396c-4.731-17.729-18.665-31.664-36.395-36.395C479.111 79.2 288 79.2 288 79.2s-191.111 0-225.26 8.801c-17.73 4.731-31.664 18.666-36.395 36.395C17.544 158.545 17.544 256 17.544 256s0 97.455 8.799 131.604c4.731 17.729 18.665 31.664 36.395 36.395 34.149 8.801 225.26 8.801 225.26 8.801s191.111 0 225.26-8.801c17.73-4.731 31.664-18.665 36.395-36.395C558.456 353.455 558.456 256 558.456 256s0-97.455-8.801-131.604zM232 337.741V174.259l144 81.741-144 81.741z" fill="#FF0000" />
    </svg>
);
