import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function Button({ children, href, variant = "primary" }: ButtonProps) {
  return (
    <Link className={`button button-${variant}`} href={href}>
      {children}
    </Link>
  );
}
