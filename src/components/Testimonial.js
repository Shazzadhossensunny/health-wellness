import React from 'react'
import styles from '../styles/Home.module.scss';

export default function Testimonial() {
  return (
    <section className={styles.testimonials}>
    <h2>Learners love EduPath. See why they rate us 4.9 out of 5</h2>
    <div className={styles.testimonialGrid}>
      {/* Testimonial cards go here */}
    </div>
  </section>
  )
}
