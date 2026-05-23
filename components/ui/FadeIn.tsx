"use client";

import { useRef, useEffect, useState, ReactNode, CSSProperties } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  direction?: "up" | "left" | "right" | "none";
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
  style = {},
  direction = "up",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transforms: Record<string, string> = {
    up: "translateY(24px)",
    left: "translateX(-18px)",
    right: "translateX(18px)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.78s ease ${delay}s, transform 0.78s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
