import React from 'react'
import styles from "../styles/ProjectSection.module.css";
import ProjectCard from './ProjectCard';
function ProjectSection() {
  return (
    <section id="portfolio" className={styles.projectsSection}>
      <h1 className={styles.projectsSection__title}>Portfolio</h1>

      <div className={styles.projectsSection__container}>
        <ProjectCard color="music" img="/music_logo.png" />
        <ProjectCard color="pink"/>
        <ProjectCard color="chat" img="/laboratory-logo-vector-27258994.png"/>
        <ProjectCard color="blue"/>
      </div>
    </section>
  )
}

export default ProjectSection
