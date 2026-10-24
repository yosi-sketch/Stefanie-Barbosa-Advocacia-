"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "gold"
    | "marsala"
    | "gold-dark"
    | "rosegold"
    | "champagne"
    | "bronze"
    | "dark"
    | "outline"
    | "ruby"
    | "white";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-3 text-[10px] tracking-[0.13em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Refined Marsala Borgonha, Velvet Cabernet, Obsidian Tailoring and Soft Pearl styling for Dra. Stefanie Barbosa
  const variantClasses = {
    gold:
      "border border-[#b5455f]/60 bg-gradient-to-r from-[#571424] via-[#8c2a41] to-[#571424] text-white font-bold shadow-md shadow-[#571424]/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-marsala",
    marsala:
      "border border-[#b5455f]/60 bg-gradient-to-r from-[#571424] via-[#8c2a41] to-[#571424] text-white font-bold shadow-md shadow-[#571424]/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-marsala",
    rosegold:
      "border border-[#b5455f]/60 bg-gradient-to-r from-[#571424] via-[#8c2a41] to-[#571424] text-white font-bold shadow-md shadow-[#571424]/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-marsala",
    "gold-dark":
      "border border-[#ecadb7]/30 bg-gradient-to-r from-[#141316] via-[#26060e] to-[#141316] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
    champagne:
      "border border-[#ecadb7]/60 bg-[#fbebed] text-[#571424] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-[#f5d3d8]",
    bronze:
      "border border-[#571424]/50 bg-[#3c0c17] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
    dark:
      "border border-[#b5455f]/40 bg-[#141316] text-[#fdf7f8] shadow-sm hover:-translate-y-0.5 hover:bg-[#1f1d22] hover:text-white",
    outline:
      "border border-[#741f34]/50 bg-white text-[#741f34] hover:-translate-y-0.5 hover:border-[#741f34] hover:bg-[#fbebed] hover:text-[#571424]",
    ruby:
      "border border-[#ef4444]/40 bg-gradient-to-r from-[#7f1d1d] via-[#991b1b] to-[#7f1d1d] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
    white:
      "border border-[#e6d8dc] bg-white text-[#141316] shadow-sm hover:-translate-y-0.5 hover:border-[#b5455f] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8c2a41] select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
