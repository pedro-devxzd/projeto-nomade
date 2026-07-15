"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    setEnabled(isTouchDevice);

    if (!isTouchDevice) return;

    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      style={{
        position: "fixed",

        left: position.x,
        top: position.y,

        width: "12px",
        height: "12px",

        background:
          "radial-gradient(circle, rgba(212,175,55,.8), transparent 70%)",

        borderRadius: "50%",

        transform: "translate(-50%, -50%)",

        pointerEvents: "none",

        zIndex: 999999,

        filter: "blur(1px)",
      }}
    />
  );
}
