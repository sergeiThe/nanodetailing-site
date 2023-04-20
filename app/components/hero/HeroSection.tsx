"use client";
import React from "react";
import styles from "./HeroSection.module.scss";
import Image from "next/image";
import {
    ContactContext,
    useContactContext,
    ActionType,
} from "@/app/store/contact-context";

import HexLink from "../hexlink/HexLink";

const HeroSection = () => {
    const contactCtx = useContactContext();

    const openContactModule = () => {
        contactCtx.dispatch({ type: ActionType.OPEN });
    };

    return (
        <section className={`section flex ${styles.section}`}>
            <video
                className={styles.bg}
                autoPlay
                playsInline
                loop
                muted
                preload="metadata"
            >
                <source src="/video/video.mp4" type="video/mp4" />
            </video>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.container}`}>
                <div className={`${styles.left} flex`}>
                    <div className={styles["img-container"]}>
                        <Image
                            alt="logo"
                            fill
                            style={{ objectFit: "contain" }}
                            src={"/images/logo.png"}
                            quality={75}
                            priority
                            className={styles.logo}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1>Nanodetailing</h1>
                        <p>
                            Vi i NanoDetailing spesialiserer oss på kosmetisk
                            behandling av bil. Vår målsetning er å tilby deg
                            innsyn i våre tekniske løsninger og kompetanse for
                            at du skal kunne oppnå de beste resultatene så trygt
                            og effektivt som mulig.
                        </p>
                        <button
                            className={`btn ${styles.btn}`}
                            onClick={openContactModule}
                        >
                            Ta kontakt
                        </button>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles["hexagon-container"]}>
                        <HexLink
                            name="Kontakt"
                            key={"kontakt"}
                            image="audi.png"
                            event={openContactModule}
                        />
                        <HexLink
                            name="Tjenester"
                            key={"tjenester"}
                            image="tesla1.png"
                            anchor="services"
                        />
                        <HexLink
                            name="Faste priser"
                            key={"kontakt"}
                            image="tesla2.png"
                            anchor="prices"
                        />
                        <HexLink
                            name="Hendlex kurs"
                            key={"kontakt"}
                            image="volk1.png"
                            anchor="course"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
