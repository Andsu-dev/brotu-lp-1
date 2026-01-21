import { CSSProperties } from "react";

type StickerVariant = "orange" | "yellow" | "blue" | "white" | "green";

interface StickerProps {
  text: string;
  variant: StickerVariant;
  rotation?: string;
  className?: string;
  icon?: string;
}

const variants: Record<StickerVariant, string> = {
  orange: "bg-[#EF5E28] text-white",
  yellow: "bg-[#FFD166] text-black",
  blue: "bg-[#003B5C] text-white",
  white: "bg-white text-black",
  green: "bg-[#8CC63F] text-black",
};

export default function Sticker({
  text,
  variant,
  rotation = "0deg",
  className = "",
  icon,
}: StickerProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 border-[3px] border-black font-black text-[10px] sm:text-xs uppercase tracking-tighter shadow-[4px_4px_0px_rgba(0,0,0,1)] ${variants[variant]} ${className}`}
      style={{ "--tw-rotate": rotation } as CSSProperties}
    >
      {icon && <span>{icon}</span>}
      {text}
    </div>
  );
}
