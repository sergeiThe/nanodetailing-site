"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";
import HexLinks from "./HexLinks";
const ServicesSection = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {
            await console.log(container);
        },
        []
    );
    return (
        <section className="min-h-[1000px] md:px-10 px-8 py-20" id="services">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                className="absolute -z-10"
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
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
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
                                opacity: 0.06,
                            },
                        },
                        size: {
                            value: { min: 30, max: 50 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            <div className="max-w-[1300px] mx-auto">
                <h2 className="text-5xl text-center">Services</h2>
                <p className="max-w-[700px] text-center mx-auto py-6">
                    Nanodetailing tilbyr førsteklasses kundeservice og en rekke
                    bilpleiealternativer å velge mellom. I tilfelle du har
                    spørsmål, kan du ta kontakt med oss.
                </p>

                <div className="">
                    <HexLinks />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
