import React from 'react'
import styles from "../styles/SkillsSection.module.css";
import SkillsCard from './SkillsCard';
function SkillsSection() {
  return (
    <section className={styles.skillsSection}>
      <h1 className={styles.skillsSection__title}>What I can do</h1>
      <div className={styles.skillsSection__container}>
        <SkillsCard
          title="Front-End"
          img="/reactlogo.png"
          p={`
                    "Develop user-frienly website that are responsive with frameworks",
                     "React" ,
                    "and ",
                    " NextJS" ,
                  `}
        />
        <SkillsCard
          title="Back-End"
          img="/DataIcon.png"
          color="orange"
          p={`
                    "Build and maintain the application ",
                    " Servers ",
                    "and ",
                    " Database",
                    "with",
                   "  Node JS",`
          }
          key={2}
        />
        <SkillsCard
          title="Spatial Web"
          img="/Web.png"
          color="purple"
          p={`
                    "Develop Advance website bult for the metaverse responsive with technologies",
                     "AR ",
                    "and ",
                    " VR ",
                  `}
          key={3}
        />
      </div>
    </section>
  )
}

export default SkillsSection
