import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4", className)}>
            {children}
        </div>
    );
};

interface BentoCardProps {
    title: string;
    description: string;
    header?: ReactNode;
    icon?: ReactNode;
    className?: string;
    cols?: number;
}

export const BentoCard = ({ title, description, header, icon, className, cols = 1 }: BentoCardProps) => {
    return (
        <div
            className={cn(
                "bg-white border-3 border-neo-black shadow-neo-sm p-6 rounded-none flex flex-col justify-between hover:shadow-neo transition-all",
                cols === 2 ? "md:col-span-2" : "md:col-span-1",
                className
            )}
        >
            <div>
                {header}
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-2xl font-bold font-bungee mb-2 uppercase">{title}</h3>
                <p className="text-lg font-baloo">{description}</p>
            </div>
        </div>
    );
};
