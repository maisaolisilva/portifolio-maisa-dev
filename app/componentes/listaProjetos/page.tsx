"use client";

import CardExpansivel from "./cardProjeto/page";
import styles from "./page.module.css";

export default function ListaProjetos() {

    return(
        <ul className={styles.lista}>
            <li>
                <CardExpansivel 
                    link="https://www.scriptdesenvolvimento.com.br/"
                    tituloLink="Site Script Desenvolvimento" 
                    textoInicial="Site institucional criado para apresentar os serviços que ofereço como desenvolvedora."
                    textoExpandido="Construído com Next.js e TypeScript, armazena dados no MongoDB Atlas via Mongoose. Integrei o Resend para envio automático de e-mails de confirmação aos visitantes e alertas internos para administração. O site é rápido, responsivo e otimizado para SEO."
                    titulo="Script Dev"
                    subTitulo="NEXT.JS | RESEND | MONGODB"
                    key="Script"
                />
            </li>
            <li>
                <CardExpansivel
                    link="https://www.diariodeviagens.inf.br/"
                    tituloLink="Site Diário de Viagens"
                    titulo="Diário de Viagens"
                    subTitulo="NEXT.JS | STRIPE | MONGODB"
                    textoInicial="Projeto contratado com o objetivo de compartilhar experiências de viagem."
                    textoExpandido="Desenvolvido em Next.js e TypeScript, utiliza CSS em módulos para estilização organizada. Possui integração com a Stripe para assinatura de hospedagem em um condomínio. O site é dinâmico, escalável e com excelente desempenho em SEO."
                    key="Diário"
                />
            </li>
            <li>
                <CardExpansivel
                    link="https://adote-beige.vercel.app/"
                    tituloLink="Site Adote"
                    titulo="Adote"
                    subTitulo="NEXT.JS | NEXTAUTH | CLOUDINARY"
                    textoInicial="Aplicação web que promove a adoção de animais."
                    textoExpandido="Desenvolvida com Next.js, MongoDB, Cloudinary e NextAuth, oferece cadastro de usuários e pets, upload de imagens e autenticação segura. Fui responsável por toda a arquitetura — do design à implementação."
                    key="Adote"
                />
            </li>
        </ul>
    )
}