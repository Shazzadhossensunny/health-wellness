import React from 'react'
import styles from '../styles/Home.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Instructors</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className={styles.login}>
          <a href="#">Login</a>
        </div>
      </header>
  )
}
