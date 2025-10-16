"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"; 
import BotaoCurriculo from "./botaoCurriculo/page";

export default function Apresentacao() {
  // Refs e estados de visibilidade
  const textoRef = useRef(null);
  const imagemRef = useRef(null);

  const textoVisivel = useInView(textoRef, { once: true });
  const imagemVisivel = useInView(imagemRef, { once: true });

  return (
    <section id="apresentacao" className={styles.apresentacao}>
      {/* TEXTO — entra primeiro */}
      <div
        ref={textoRef}
        className={styles.textoApresentacao}
        style={{
          transform: textoVisivel ? "none" : "translateX(-200px)",
          opacity: textoVisivel ? 1 : 0,
          transition:
            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <p><span>Desenvolvedora web Full-stack</span></p>
        <h1>
          Maisa de <span>Oliveira</span> Silva
        </h1>
        <p>
          Transformando ideias em soluções web escaláveis, modernas e com
          foco em usabilidade e performance.
        </p>
        <ul className={styles.lista}>
          <li>
            <BotaoCurriculo />
          </li>
          <li>
            <Button variant="outlined" size="large">
              <Link
                className={styles.botaoLinkedin}
                href="https://www.linkedin.com/in/maisaolisilva/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon /> Linkedin
              </Link>
            </Button>
          </li>
        </ul>
      </div>

      {/* IMAGEM — entra depois do texto */}
      <div
        ref={imagemRef}
        style={{
          transform: imagemVisivel ? "none" : "translateX(200px)",
          opacity: imagemVisivel ? 1 : 0,
          transition:
            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
        }}
      >
        <Image
          src="/assets/foto-perfil.png"
          width={350}
          height={350}
          alt="Foto de desenvolvedora: mulher branca com cabelo liso e curto de cor castanho escuro. Usa uma blusa branca e óculos e no fundo há uma mesa e um computador"
        />
      </div>
    </section>
  );
}
