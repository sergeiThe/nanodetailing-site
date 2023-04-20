import React from "react";
import styles from "./HexLink.module.scss";
import Image from "next/image";

interface LinkProps {
    image: string;
    name: string;
    event?: () => void;
}

const HexLink = (props: LinkProps) => {
    return (
        <div className={styles.link} onClick={props.event}>
            <div className={styles.img}>
                <Image
                    alt={props.name}
                    fill
                    style={{ objectFit: "contain" }}
                    src={"/images/" + props.image}
                />
                <a>{props.name}</a>
            </div>
        </div>
    );
};

export default HexLink;
