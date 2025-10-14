"use client";

import CardCustomizado from "./card/page";
import styles from "./page.module.css";

export default function ListaDeCards() {
    return(
        <ul className={styles.lista}>
            <li key={"Linguagens & Frameworks"}>
                <CardCustomizado titulo={"Linguagens & Frameworks:"} frase={"TypeScript, JavaScript (ES6+), Next.js, React.js, Node.js, HTML5, CSS3"} />
            </li>
            <li key={"Banco de Dados"}>
                <CardCustomizado titulo={"Banco de Dados:"} frase={"MongoDB (com Mongoose e Atlas)"} />
            </li>
            <li key={"Ferramentas & Plataformas"}>
                <CardCustomizado titulo={"Ferramentas & Plataformas:"} frase={"Git, VS Code, Figma, Cloudinary, Vercel"} />
            </li>
            <li key={"APIs & Serviços"}>
                <CardCustomizado titulo={"APIs & Serviços:"} frase={"Stripe (Pagamentos), Resend (E-mails), NextAuth (Autenticação)"} />
            </li>
        </ul>
    )
}