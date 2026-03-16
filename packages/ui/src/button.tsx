"use client";

import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}
export function Button({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const baseStyle = {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontWeight: "600",
  };

  const variantStyles = {
    primary: {
      backgroundColor: "#0070f3",
      color: "white",
    },
    secondary: {
      backgroundColor: "#f5f5f5",
      color: "#333",
      border: "1px solid #e5e7eb",
    },
  };

  const hoverStyles = {
    transform: "translateY(-1px)",
    boxShadow: "0px 4px 8px rgb(0,0,0,0.15)",
  };
  return (
    <button
      onClick={onClick}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyles);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
      }}
      style={{ ...baseStyle, ...variantStyles[variant] }}
    >
      {children}
    </button>
  );
}
