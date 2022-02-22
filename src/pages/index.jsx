import Head from "next/head";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Experiences } from "../components/Slides";

export default function Home() {
  return (
    <>
      <Head>
        
        <meta charset="utf-8" />
        <meta
        name="Portfolio"
        content="Portfolio de projetos de Carlos Amorim, desenvolvedor Front-End"
        />
        <link rel="icon" href="/favicon.png" />
        <title>Carlos Amorim - Portfolio</title>

      </Head>

      <Header />

      <Hero />

      <About />

      <Experiences />

    
    </>
  )
}
