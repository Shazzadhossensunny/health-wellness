import React from 'react'
import styles from '../styles/Home.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>The #1 Platform Powering Health and Wellness</h1>
        <p>We're restoring home as the primary place of personal well-being</p>
        <div className={styles.buttons}>
          <button className={styles.btnPrimary}>Browse Courses</button>
          <button className={styles.btnSecondary}>Get Started</button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src="/hero-image.jpg" alt="Hero Image" />
      </div>
    </section>
  )
}
