import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface NeoButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "action";
}

const NeoButton = forwardRef<HTMLButtonElement, NeoButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "px-6 py-3 font-bold text-neo-black border-2 border-neo-black transition-all cursor-none",
                    "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
                    "active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
                    variant === "primary" && "bg-neo-pink text-white hover:bg-pink-500",
                    variant === "secondary" && "bg-neo-yellow hover:bg-yellow-400",
                    variant === "action" && "bg-neo-blue text-white hover:bg-blue-600",
                    className
                )}
                {...props}
            />
        );
    }
);
NeoButton.displayName = "NeoButton";

export { NeoButton };
