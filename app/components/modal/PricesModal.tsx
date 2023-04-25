"use client";
import React from "react";
import styles from "./PricesModal.module.scss";
import Image from "next/image";
import { PricesActionType, usePricesContext } from "@/app/store/prices-context";
import { motion as m } from "framer-motion";

interface PricesModalProps {
    image: string;
}

const PricesModal = ({ image }: PricesModalProps) => {
    const pricesCtx = usePricesContext();

    const close = () => {
        pricesCtx.dispatch({ type: PricesActionType.CLOSE });
    };

    return (
        <m.div
            className={styles.modal}
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            exit={{ opacity: 0 }}
            key={styles.modal}
        >
            <div className={styles["img-container"]}>
                <Image
                    alt={image}
                    fill
                    src={image}
                    style={{ objectFit: "contain" }}
                    priority
                />
            </div>
        </m.div>
    );
};

export default PricesModal;
