import React from 'react'
import styles from "../styles/AboutSection.module.css";
import ContactLinks from './ContactLinks';
function AboutSection() {
    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.aboutSection__container}>
                <div className={styles.aboutSection__textsContainer}>
                  <h1 className={styles.aboutSection__nameSpan}>I'm </h1>
                  <h1 className={styles.aboutSection__name}> Stephen Plummer</h1>
                </div>
                <p className={styles.aboutSection__p}>
                  I am a <strong>Web developer</strong> based in Connecticut.
                  I  develop Full-Stack web applications for clients using
                  <strong> React</strong>, <strong>Next JS</strong>,
                   <strong> Express</strong>, and <strong>Mongo DB</strong>.
                </p>
                <p className={styles.aboutSection__p}>
                  <strong>React</strong> repellat, maxime officiis ex quis nisi,
                quasi veniam eaque reiciendis, <strong>WebGL</strong> est quos
                quas facere suscipit natus sed.
              </p>
                <ContactLinks size="medium" />
                <p className={styles.aboutSection__line}></p>
              </div>
              <img
                className={styles.aboutSection__photo}
                src="/headshot.png"
                alt=""
              />
        </section>
    )
}

export default AboutSection
