"use client";
import React from "react";
import styles from "./PricesSection.module.scss";
import Image from "next/image";
import { PricesActionType, usePricesContext } from "@/app/store/prices-context";

class PricesLink {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

// const prices = [
//   "TESLA",
//   "NIO",
//   "BYD",
//   "VOYAH",
//   "CITROEN DS7"
// ]

const prices = [
    { title: "TESLA", image: "tesla.jpg" },
    { title: "NIO", image: "nio.jpg" },
    { title: "BYD", image: "byd.jpg" },
    { title: "VOYAH", image: "voyah.jpg" },
    { title: "CITROEN DS7", image: "citroen.jpg" },
];

const PricesSection = () => {
    const pricesCtx = usePricesContext();

    const open = (image: string) => {
        pricesCtx.dispatch({ type: PricesActionType.OPEN, payload: image });
    };

    const links = prices.map((p) => {
        return (
            <li key={p.title}>
                <button
                    className="btn"
                    onClick={() => {
                        open(p.image);
                    }}
                >
                    {p.title}
                </button>
            </li>
        );
    });
    return (
        <section className={`${styles.section}`} id="prices">
            <Image
                src={"/images/stripebg.jpg"}
                fill
                alt="bg"
                className={styles.bg}
                style={{ objectFit: "cover" }}
            />
            <div className={styles.container}>
                <div className="container">
                    <h2 className="centered">Faste priser</h2>
                    <p className="centered">
                        Vi har faste priser for enkelte bilmerker. Er ikke bilen
                        din på lista, ta kontakt med oss
                    </p>
                    <ul className={styles.list}>{links}</ul>
                </div>
            </div>
        </section>
    );
};

export default PricesSection;
