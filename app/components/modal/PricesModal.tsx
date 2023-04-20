import React from "react";
import styles from "./PricesModal.module.scss";
import Image from "next/image";
import { PricesActionType, usePricesContext } from "@/app/store/prices-context";

interface PricesModalProps {
    image: string;
}

const PricesModal = ({ image }: PricesModalProps) => {
    const pricesCtx = usePricesContext();

    const close = () => {
        pricesCtx.dispatch({ type: PricesActionType.CLOSE });
    };

    return (
        <div className={styles.modal} onClick={close}>
            <div className={styles["img-container"]}>
                <Image
                    alt="prices"
                    fill
                    src={image}
                    style={{ objectFit: "contain" }}
                />
            </div>
        </div>
    );
};

export default PricesModal;
