"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface ShapesProps {
  isHover: boolean;
  isPress: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function Shapes({ isHover, isPress, mouseX, mouseY }: ShapesProps) {
  const rotateX = useTransform(mouseY, [-50, 50], [15, -15]);
  const rotateY = useTransform(mouseX, [-50, 50], [-15, 15]);
  const scale = useTransform(mouseY, [-100, 100], [1.1, 0.9]);

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        scale,
        perspective: 600,
        width: 80,
        height: 80,
        position: "relative",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, #3b82f6, #2563eb)",
          opacity: isHover ? 1 : 0.7,
          filter: isPress ? "brightness(1.3)" : "brightness(1)",
          boxShadow: "0 0 30px rgba(59,130,246,0.6)",
        }}
      />
    </motion.div>
  );
}
