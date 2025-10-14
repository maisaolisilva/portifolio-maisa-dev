"use client";

import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import styles from "./page.module.css";

export default function Contato() {
    return (
        <ul className={styles.contatoLista}>
                  <li>
                    <p><span>WhatsApp:</span></p>
                    <a className={styles.link} href="https://wa.me/5524992581089" target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon /> +55 24 99258-1089
                    </a>
                  </li>
                  <li>
                    <p><span>E-mail da Script:</span></p>
                    <Link className={styles.link} href="mailto:scriptdesenvolvimento@gmail.com"><EmailIcon /> scriptdesenvolvimento@gmail.com</Link>
                  </li>
                  <li>
                    <p><span>E-mail pessoal:</span></p>
                    <Link className={styles.link} href="mailto:maisaolisilva@gmail.com"><EmailIcon /> maisaolisilva@gmail.com</Link>
                  </li>
                  <li>
                    <p><span>Formulário no site da Script:</span></p>
                    <Link className={styles.link} href="https://www.scriptdesenvolvimento.com.br/#contato" target="_blank" rel="noopener noreferrer">
                      <ContactPageIcon /> Formulário
                    </Link>
                  </li>
                </ul>
    )
}