import React from 'react'
import styles from '../styles/Home.module.scss';

export default function PopularCourses() {
  return (
    <section className={styles.popularCourses}>
    <h2>Our popular courses</h2>
    <p>By taking proactive steps to nurture mental health, we can enhance our quality of life, build resilience, and foster a sense of inner peace and balance</p>
    <div className={styles.courseGrid}>
      {/* Course cards go here */}
    </div>
  </section>
  )
}
