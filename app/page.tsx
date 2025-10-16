"use client"

import CabecalhoResponsivel from "./componentes/cabecalhoResponsivo/page";
import styles from "./page.module.css"
import ListaDeCards from "./componentes/listaCards/page";
import Apresentacao from "./componentes/apresentacao/page";
import ListaProjetos from "./componentes/listaProjetos/page";
import Contato from "./componentes/contato/page";
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <CabecalhoResponsivel />
      <main>
        <div className={styles.conteudoMain}>
         <Apresentacao />
          <section id="sobre-mim" className={styles.sobre}>
            <h2>Sobre mim e Minhas <span>Habilidades</span></h2>
                <div className={styles.sobreContainer}>
                  <div className={styles.sobre1}>
                    <br />
                    <p>Meu nome é Maisa de Oliveira Silva e atualmente curso o 4º ano de Engenharia de Software pelo Centro Universitário Internacional – UNINTER. Além da formação acadêmica, venho me especializando em desenvolvimento web através de cursos na Alura e projetos independentes, que me permitiram aplicar na prática tecnologias como Next.js, TypeScript, MongoDB, Cloudinary, Stripe, Resend e NextAuth.</p>
                    <br />
                    <p>Tenho CNPJ ativo voltado para desenvolvimento de software e ofereço soluções personalizadas para pequenos negócios, desde sites institucionais até aplicações web completas. Entre minhas competências destaco: aprendizagem rápida, criatividade, paciência e colaboração em equipe.</p>
                    <br />
                    <p className={styles.destaque}>Meu objetivo é sempre transformar ideias em projetos reais, que unam inovação, escalabilidade e boa usabilidade.</p>
                  </div>
                  <div className={styles.sobre2}>
                    <h3>Tecnologias Chave</h3>
                    <ListaDeCards />
                  </div>
                </div>
          </section>
          <section id="projetos" className={styles.projetos}>
                <h2>Meus principais <span>Projetos</span></h2>
                <br />
                <ListaProjetos />
          </section>
          <section id="contato" className={styles.contato}>
                <h2>Contato</h2>
                <br />
                <p>Você pode me contatar através dos seguintes canais:</p>
                <br />
                <Contato />
          </section>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© 2025 - Desenvolvido por Maisa</p>
        <Link href={"https://github.com/maisaolisilva/portifolio-maisa-dev"} target="_blank" rel="noopener noreferrer" className={styles.linkFooter}>
        <GitHubIcon /> Repositório do Projeto</Link>
      </footer>
    </>
  );
}
