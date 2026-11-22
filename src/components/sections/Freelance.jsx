import { motion } from "framer-motion";
import ProjectCard from "../cards/ProjectCard";
import styled from "styled-components";
import { freelanceProjects } from "../../data/constants";

const Section = styled.section`
  position: relative;
  max-width: 1160px;
  margin: 0 auto;
  padding: 36px 24px 80px;
  scroll-margin-top: 80px;
  color: ${({ theme }) => theme.text_primary};

  h2 {
    font-size: clamp(2rem, 5vw, 3.25rem);
    font-weight: 600;
    text-align: center;
  }
`;

const Intro = styled.p`
  max-width: 62ch;
  margin: 12px auto 32px;
  text-align: center;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text_secondary};
`;

const Grid = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

export default function Freelance({ setOpenModal }) {
  return (
    <Section id="Freelance" aria-labelledby="freelance-title">
      <h2 id="freelance-title">Freelance Projects</h2>
      <Intro>I build websites around what each business needs its visitors to do, from finding a food truck to requesting a construction quote.</Intro>
      <Grid
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {freelanceProjects.map((project) => (
          <ProjectCard key={project.webapp} project={project} setOpenModal={setOpenModal} />
        ))}
      </Grid>
    </Section>
  );
}
