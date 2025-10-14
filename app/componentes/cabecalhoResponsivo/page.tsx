"use client";

import { useEffect, useState } from "react";
import Appbar from "../appBar/page";
import Cabecalho from "../cabecalho/cabecalho";

export default function CabecalhoResponsivel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 540px)");

    // Atualiza o estado com base na largura atual da tela
    const handleResize = () => setIsMobile(mediaQuery.matches);
    
    handleResize(); // verificar na montagem

    mediaQuery.addEventListener("change", handleResize);
    
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return isMobile ? <Appbar /> : <Cabecalho />;
}