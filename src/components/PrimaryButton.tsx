import type React from "react";

type PrimaryButtonProps = {
  children: React.ReactNode;
  ariaLabel: string;
  onClick?: () => void;
};

export function PrimaryButton({
  children,
  ariaLabel,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
    >
      {children}
    </button>
  );
}
