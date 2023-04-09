'use client'
import React from 'react'
import styles from "./HeroSection.module.scss"
import Image from 'next/image';


const HeroSection = () => {
    return (
        <section className={`section flex ${styles.section}`}>
            <div className={`${styles.left} flex`}>
                <div className={styles["img-container"]}>
                    <Image
                        alt='logo'
                        fill
                        style={{ objectFit: 'contain', objectPosition: 'left' }}
                        src={'/images/logo.png'}
                        quality={75}
                        priority
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
                    <button className="btn">Ta kontakt</button>
                </div>
            </div>
            <div className={styles.right}>
                <div className="hexagon-link">
                    <a onClick={() => { console.log("Hexagon link clicked") }}>Kontakt</a>
                </div>
                <div className="hexagon-link">
                    <a onClick={() => { console.log("Hexagon link clicked") }}>Kontakt</a>
                </div>
                <div className="hexagon-link">
                    <a onClick={() => { console.log("Hexagon link clicked") }}>Kontakt</a>
                </div>
                <div className="hexagon-link">
                    <a onClick={() => { console.log("Hexagon link clicked") }}>Kontakt</a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection