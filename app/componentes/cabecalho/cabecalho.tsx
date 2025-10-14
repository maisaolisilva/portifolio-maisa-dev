"use client";

import Link from "next/link";
import styles from "./page.module.css"

export default function Cabecalho() {
    return(
        <header className={styles.cabecalho}>
          <Link className={styles.linkDiferente} href={"/"}>
          Maisa.dev
          </Link>
          <nav className={styles.menu}>
            <Link className={styles.link} href={"#sobre-mim"}>Sobre Mim</Link>
            <Link className={styles.link} href={"#projetos"}>Projetos</Link>
            <Link className={styles.link} href={"#contato"}>Contato</Link>
            <Link className={styles.link} href={"https://www.scriptdesenvolvimento.com.br/"} target="_blanck" rel="noopener noreferrer">Meus Serviços</Link>
          </nav>
      </header>
    )
}