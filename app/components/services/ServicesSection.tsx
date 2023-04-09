'use client'
import React from 'react'
import styles from "./ServicesSection.module.scss"

const ServicesSection = () => {
    return (
        <section className={`section ${styles.section}`}>
            <div className={styles.container}>

                <h2 className="centered">Services</h2>
                <p className="centered">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit corporis eum odit provident esse alias nobis mollitia officiis debitis. Porro mollitia molestiae esse cupiditate nisi perferendis minus nam libero sed.</p>

                <div className={styles['link-container']}>
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
            </div>
        </section>
    )
}

export default ServicesSection