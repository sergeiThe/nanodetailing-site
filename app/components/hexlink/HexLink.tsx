import React from "react";
import styles from "./HexLink.module.scss";
import Image from "next/image";
import { Link } from "react-scroll";

interface LinkProps {
    image: string;
    name: string;
    event?: () => void;
    anchor?: string;
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
                {props.anchor && (
                    <Link
                        to={props.anchor}
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className={styles["scroll-link"]}
                    >
                        {props.name}
                    </Link>
                )}
                {!props.anchor && <a>{props.name}</a>}
            </div>
        </div>
    );
};

export default HexLink;
