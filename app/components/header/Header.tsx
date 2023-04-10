'use client'
import React, { useEffect } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import { Link } from 'react-scroll';
import { useState } from 'react';


class LinkStructure {
  to: string;
  linkName: string;
  isAnchor: boolean;

  constructor(to: string, linkName: string, isAnchor: boolean) {
    this.to = to
    this.linkName = linkName
    this.isAnchor = isAnchor
  }
}

const navLinks: LinkStructure[] = [
  new LinkStructure("services", "Tjenester", true),
  new LinkStructure("prices", "Priser", true),
  new LinkStructure("course", "Kurs", true),
  new LinkStructure("contact", "Kontakt", false),
]

const Header = () => {

  // open nav
  const [show, setShow] = useState<boolean>(false)

  const navHandler = () => {
    if (window.scrollY < 300) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navHandler)
    return () => {
      window.removeEventListener('scroll', navHandler)
    }
  }, [])


  const anchorLinks = navLinks.map(link => {
    return (
      <li key={link.linkName} className='nav-item'>
        <a className={styles["nav-link"]} onClick={() => { console.log("Opening contact/scroll to section") }}>{link.linkName}</a>
      </li>
    )
  })

  return (
    <header className={`header ${styles.header} ${show && 'show-navbar'}`}>
      <div className={`container ${styles.container}`}>

        <div className={styles["img-container"]}>
          <Image
            src={'/images/logo.png'}
            fill
            style={{ objectFit: 'contain', objectPosition: 'left' }}
            alt='logo'
            quality={75}
          />
        </div>
        <nav className={`${styles.nav} flex`}>
          <ul className='flex'>
            {anchorLinks}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header