'use client'
import React from 'react'
import styles from "./PricesSection.module.scss"
import Image from 'next/image';

class PricesLink {

  name: string;
  constructor(name: string) {
    this.name = name
  }
}

const prices = [
  "TESLA",
  "NIO",
  "BYD",
  "VOYAH",
  "CITROEN DS7"
]

const PricesSection = () => {
  const links = prices.map((p: string) => {
    return (
      <li key={p}>
        <button className='btn' onClick={() => { console.log("See prices...") }}>{p}</button>
      </li>
    )
  })
  return (
    <section className={` ${styles.section}`}>

      <Image
        src={'/images/stripebg.jpg'}
        fill
        alt='bg'
        className={styles.bg}
        style={{ objectFit: 'cover' }}

      />
      <div className={styles.container}>


        <div className='container'>

          <h2 className='centered'>Faste priser</h2>
          <p className='centered'>Vi har faste priser for enkelte bilmerker. Er ikke bilen din på lista, ta kontakt med oss</p>
          <ul className={styles.list}>
            {links}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PricesSection