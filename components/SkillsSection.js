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
                  p={[
                    "Develop user-frienly website that are responsive with frameworks",
                    <strong> React </strong>,
                    "and ",
                    <strong> NextJS </strong>,
                  ]}
                />
                <SkillsCard
                  title="Back-End"
                  img="/DataIcon.png"
                  color="orange"
                  p={[
                    "Build and maintain the application ",
                    <strong> Servers </strong>,
                    "and ",
                    <strong> Database</strong>,
                    "with",
                    <strong> Node JS</strong>,
                  ]}
                />
                <SkillsCard
                  title="Spatial Web"
                  img="/Web.png"
                  color="purple"
                  p={[
                    "Develop Advance website bult for the metaverse responsive with technologies",
                    <strong> AR </strong>,
                    "and ",
                    <strong> VR </strong>,
                  ]}
                />
              </div>
        </section>
    )
}

export default SkillsSection
