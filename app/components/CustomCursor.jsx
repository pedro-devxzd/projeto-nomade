"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [circle, setCircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  useEffect(() => {
    let animation;

    const follow = () => {
      setCircle((current) => ({
        x: current.x + (mouse.x - current.x) * 0.12,
        y: current.y + (mouse.y - current.y) * 0.12,
      }));

      animation = requestAnimationFrame(follow);
    };

    follow();

    return () => cancelAnimationFrame(animation);
  }, [mouse]);

  return (
    <>
      {/* círculo elegante */}
      <div
        style={{
          position: "fixed",
          left: circle.x,
          top: circle.y,

          width: "42px",
          height: "42px",

          borderRadius: "50%",
          border: "1px solid rgba(212,175,55,0.55)",

          background: "rgba(212,175,55,0.04)",

          backdropFilter: "blur(8px)",

          transform: "translate(-50%, -50%)",

          pointerEvents: "none",
          zIndex: 999999,

          transition: "width .3s ease, height .3s ease",
        }}
      />

      {/* ponto central */}
      <div
        style={{
          position: "fixed",
          left: mouse.x,
          top: mouse.y,

          width: "6px",
          height: "6px",

          background: "#D4AF37",

          borderRadius: "50%",

          transform: "translate(-50%, -50%)",

          pointerEvents: "none",
          zIndex: 999999,
        }}
      />
    </>
  );
}
