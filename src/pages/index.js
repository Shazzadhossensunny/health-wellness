import React from 'react'
import styles from '../styles/Home.module.scss';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PopularCourses from '@/components/PopularCourses';
import Services from '@/components/Services';
import Testimonial from '@/components/Testimonial';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <PopularCourses />
      <Services />
      <Testimonial />

    </div>
  )
}
