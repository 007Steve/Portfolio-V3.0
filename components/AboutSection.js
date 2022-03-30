import React from 'react'
import styles from "../styles/AboutSection.module.css";
import ContactLinks from './ContactLinks';
import Image from 'next/image'
function AboutSection() {
    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.aboutSection__container}>
                <div className={styles.aboutSection__textsContainer}>
                  <h1 className={styles.aboutSection__nameSpan}>{`I'm`} </h1>
                  <h1 className={styles.aboutSection__name}> Stephen Plummer</h1>
                </div>
                <p className={styles.aboutSection__p}>
                  I am a <strong>Web developer</strong> based in Connecticut.
                  I  develop Full-Stack web applications for clients using
                  <strong> React</strong>, <strong>Next JS</strong>,
                   <strong> Express</strong>, and <strong>Mongo DB</strong>.
                </p>
                <p className={styles.aboutSection__p}>
                  I am a <strong>Web developer</strong> based in Connecticut.
                  I  develop Full-Stack web applications for clients using
                  <strong> React</strong>, <strong>Next JS</strong>,
                   <strong> Express</strong>, and <strong>Mongo DB</strong>.
                </p>
              
                <ContactLinks size="medium" />
                <p className={styles.aboutSection__line}></p>
              </div>
              <div className={styles.aboutSection__photo}>
              <Image  
              src="/headshot.png" height={450} width={670}  alt="a logo of project icon"/>
              </div>
              
             
        </section>
    )
}

export default AboutSection
