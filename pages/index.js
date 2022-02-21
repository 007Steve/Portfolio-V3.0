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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {show? <LandingPage/> : <>
      <HeaderSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection/>
      </>}
    </div>
  )
}
