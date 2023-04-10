import React from 'react'
import styles from "./Footer.module.scss"
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={`footer ${styles.footer}`}>
            <div className="container flex">

                <div className={styles.left}>

                    <p>Ledet av Isa Beslanovitsj, ble Nanodetailing grunnlagt med ett mål i tankene - å gi hver eneste kunde ærlig, personlig oppmerksomhet for å sikre at de får den beste servicen som mulig. Fordi vi bryr oss om detaljene, er det viktig for oss at kundene våre vet hvem de jobber med. Når du tar med deg bilen din til oss i Trondheim, får du vår ultimate oppmerksomhet på detaljer.</p>
                    <button>Kontaktskjema</button>
                    <div>Social links...</div>
                </div>
                <div className={styles.right}>
                    <div className={styles["img-container"]}>
                        <Image
                            alt='logo'
                            fill
                            style={{ objectFit: 'contain', objectPosition: 'right' }}
                            src={'/images/logo.png'}
                            quality={75}
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className='centered'>Designet og utviklet av Sergei Medialics</div>
        </footer>
    )
}

export default Footer