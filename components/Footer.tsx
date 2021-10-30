import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Made using <a href="https://reactjs.org/">React</a> and <a href="https://www.gatsbyjs.org/">Gatsby</a>.</p>
    </footer>
  )
}

export default Footer
