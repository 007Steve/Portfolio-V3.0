import React from 'react'
import styles from "../styles/ContactSection.module.css";
import Form from './Form';
import ContactLinks from './ContactLinks';
function ContactSection() {
    return (
        <section id="contact" className={styles.contactSection}>
              <Form />
              <div className={styles.footer__sectionFooter}>
                <p> © Stephen Plummer</p>
                <div className={styles.footer__sectionAboutIcons}>
                  <ContactLinks size="small" />
                </div>
              </div>
            </section>
    )
}

export default ContactSection
