"use client";

import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { Shapes } from "./Shapes"; // mesmo componente do teu snippet
import { transition } from "./settings"; // idem
import "./botaoCurriculo.css";

export default function BotaoCurriculo() {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const abrirCurriculo = () =>
    window.open("./arquivos/Maisa-Oliveira-Curriculo.pdf");

  return (
    <MotionConfig transition={transition}>
      <motion.button
        ref={ref}
        className="botao-curriculo"
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.2 },
          press: { scale: 1.1 },
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => {
          setIsPress(false);
          abrirCurriculo();
        }}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <motion.div
          className="shapes"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
        >
          <div className="azul blush" />
          <div className="azul-escuro blush" />
          <div className="container">
            <Suspense fallback={null}>
              <Shapes
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </Suspense>
          </div>
        </motion.div>
        <motion.div
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.05 } }}
          className="label"
        >
          Download Currículo
        </motion.div>
      </motion.button>
    </MotionConfig>
  );
}
