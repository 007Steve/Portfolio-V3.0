import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderSection from '../components/HeaderSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import LandingPage from '../components/LandingPage'
import { useState, useEffect } from 'react'
export default function Home() {

  //show toggle
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 6000);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Stephen Plummer</title>
        <meta name="google-site-verification" content="Pibz-wSlJ8mqoQ7lD1duv6-PDxLYKyMi_6wCfEmlSCU" />
        <meta name="description" content="Stephen Plummer is Software Ennineer based in Connecticut.I develop Full-Stack web applications for clients using React, Next JS, Express, and Mongo DB."></meta>

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://www.stephenplummer.dev"></link>
      </Head>
      {true ? <LandingPage /> : <>
        <HeaderSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </>}
    </div>
  )
}
