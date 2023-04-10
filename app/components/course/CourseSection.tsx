import React from 'react'
import styles from "./CourseSection.module.scss"
import Image from 'next/image'

const products = ['m3.webp', 'ppf.webp']

const CourseSection = () => {

  const productHexagons = products.map(p => {
    return (
      <div key={p} className={styles['hexagon-img']}>
        <Image
          alt='logo'
          fill
          style={{ objectFit: 'contain' }}
          src={`/images/${p}`}
          quality={75}
          priority
        />
      </div>
    )
  })

  return (
    <section className={`section ${styles.section}`}>
      <div className={`${styles.container} flex container`}>

        <div className={styles.left}>
          <h2>Hendlex kurs</h2>
          <p>Har du lyst til å kunne få bruke topp produkter av Hendlex innen keramisk forsegling, beskyttelse og annet bilpleie, må du ha tatt tilsvarende sertifisering.Slik mulighet tilbyr vi her i Nano Detailing. Etter fullført kurs, får du sertifikat og mulighet til å kjøpe og bruke produktene av Hendlex.</p>
          <div>
            <iframe width={"100%"} height="315" src="https://www.youtube.com/embed/X7Q5dNEDat0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
        <div className={styles.right}>
          {productHexagons}
        </div>
      </div>
    </section>
  )
}

export default CourseSection