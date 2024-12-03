import React from 'react'
import styles from '../styles/Home.module.scss';

export default function Services() {
  return (
    <section className={styles.services}>
    <h2>We provide...</h2>
    <div className={styles.serviceList}>
      <div className={styles.serviceItem}>
        <img src="/icon-personalized-routine.svg" alt="Personalized Routine Icon" />
        <h3>Personalized routine</h3>
      </div>
      <div className={styles.serviceItem}>
        <img src="/icon-follow-up.svg" alt="Follow-up Icon" />
        <h3>Follow-up after completing courses</h3>
      </div>
      <div className={styles.serviceItem}>
        <img src="/icon-additional-resources.svg" alt="Additional Resources Icon" />
        <h3>Access to additional resources</h3>
        <p>We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.</p>
      </div>
      <div className={styles.serviceItem}>
        <img src="/icon-community-support.svg" alt="Community Support Icon" />
        <h3>Free community support</h3>
      </div>
    </div>
    <button className={styles.btnLearnMore}>Learn More About Our Services</button>
  </section>
  )
}
