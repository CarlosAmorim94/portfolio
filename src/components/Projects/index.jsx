import { Cards } from "../Cards";
import { CardsPainel, Container } from "./styles";
import { motion } from "framer-motion";

export const Projects = () => {

  return (
  <Container id="projects">
    
    <motion.h1
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }} //onScroll
      transition={{ duration: 1, delay: 0.5, type: 'spring',
      stiffness: 80 }}
      viewport={{ once: true }} // only one time
    >
      Projetos
    </motion.h1>
    
    <CardsPainel>

      <Cards />
      
    </CardsPainel>

  </Container>
  )
}