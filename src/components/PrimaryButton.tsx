import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

type PrimaryButtonProps = {
  readonly children: ReactNode;
  readonly ariaLabel: string;
  readonly variant?: Variant;
  readonly size?: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function PrimaryButton({
  children,
  ariaLabel,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: PrimaryButtonProps) {
  const baseClasses =
    "inline-block font-semibold rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105";

  const variantClasses = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    secondary:
      "bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600",
  };

  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
