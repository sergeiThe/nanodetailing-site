'use client'
import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import styles from "./ServicesSection.module.scss"
import type { Container, Engine } from "tsparticles-engine"


const ServicesSection = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <section className={`section ${styles.section}`}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                className={styles.particles}
                options={{

                    style: { zIndex: "-1" },

                    background: {
                        // color: {
                        //     value: "#0d47a1",
                        // },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 5,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#fff",
                        },
                        links: {
                            color: "#c20000",
                            distance: 250,
                            enable: true,
                            opacity: 0.1,
                            width: 1,
                        },
                        collisions: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 50,
                        },
                        opacity: {
                            value: 0.03,
                        },
                        shape: {
                            type: "polygon",
                            polygon: {
                                sides: 6,

                            },
                            stroke: {
                                width: 2,
                                color: "#c20000",
                                opacity: 0.06
                            }
                        },
                        size: {
                            value: { min: 30, max: 50 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            <div className={`container ${styles.container}`}>

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