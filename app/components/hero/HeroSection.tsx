'use client'
import React from 'react'
import styles from "./HeroSection.module.scss"
import Image from 'next/image';


const HeroSection = () => {
    return (
        <section className={`section flex ${styles.section}`}>
            <video className={styles.bg} autoPlay playsInline loop muted preload='metadata'>
                <source src='/video/video.mp4' type='video/mp4' />
            </video>
            <div className={styles.overlay}>

            </div>
            <div className={`container ${styles.container}`}>

                <div className={`${styles.left} flex`}>
                    <div className={styles["img-container"]}>
                        <Image
                            alt='logo'
                            fill
                            style={{ objectFit: 'contain' }}
                            src={'/images/logo.png'}
                            quality={75}
                            priority
                            className={styles.logo}
                        />
                    </div>
                    <div className={styles.content}>

                        <h1>Nanodetailing</h1>
                        <p>
                            Vi i NanoDetailing spesialiserer oss på kosmetisk behandling
                            av bil. Vår målsetning er å tilby deg innsyn i våre tekniske
                            løsninger og kompetanse for at du skal kunne oppnå de beste
                            resultatene så trygt og effektivt som mulig.
                        </p>
                        <button className={`btn ${styles.btn}`}>Ta kontakt</button>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles["hexagon-container"]}>

                        <div className="hexagon-link">
                            <a onClick={() => { console.log("Hexagon link clicked") }}>Kontakt</a>
                        </div>
                        <div className="hexagon-link">
                            <a onClick={() => { console.log("Hexagon link clicked") }}>Tjenester</a>
                        </div>
                        <div className="hexagon-link">
                            <a onClick={() => { console.log("Hexagon link clicked") }}>Faste priser</a>
                        </div>
                        <div className="hexagon-link">
                            <a onClick={() => { console.log("Hexagon link clicked") }}>Hendlex kurs</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection