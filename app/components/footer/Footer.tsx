import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import { ActionType, useContactContext } from "@/app/store/contact-context";

const Footer = () => {
    const contactCtx = useContactContext();

    const open = () => {
        contactCtx.dispatch({ type: ActionType.OPEN });
    };

    return (
        <>
            <footer className={`footer ${styles.footer}`}>
                <Image
                    alt="footerbg"
                    fill
                    style={{ objectFit: "contain" }}
                    src={"/images/bgfooter.jpg"}
                />
                <div className={styles.bg}></div>
                <div className={`container ${styles.container}`}>
                    <div className={styles.left}>
                        <p>
                            Nanodetailing ble grunnlagt med ett mål i tankene -
                            å gi hver eneste kunde ærlig, personlig
                            oppmerksomhet for å sikre at de får den beste
                            servicen som mulig. Fordi vi bryr oss om detaljene,
                            er det viktig for oss at kundene våre vet hvem de
                            jobber med. Når du tar med deg bilen din til oss i
                            Trondheim, får du vår ultimate oppmerksomhet på
                            detaljer.
                        </p>
                        <button className="btn" onClick={open}>
                            Kontaktskjema
                        </button>
                    </div>
                    <div className={styles.right}>
                        <div className={styles["img-container"]}>
                            <Image
                                alt="logo"
                                fill
                                style={{ objectFit: "contain" }}
                                src={"/images/logo.png"}
                                quality={75}
                                className={styles.logo}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.rights}>
                    Designet og utviklet av Sergei Medialics
                </div>
            </footer>
        </>
    );
};

export default Footer;
