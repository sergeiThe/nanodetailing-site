"use client";
import React, { useEffect } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { Link } from "react-scroll";
import { useState } from "react";
import { BsFacebook, BsInstagram, BsMessenger } from "react-icons/bs";
import { ActionType, useContactContext } from "@/app/store/contact-context";

const Header = () => {
    // open nav
    const [show, setShow] = useState<boolean>(false);

    const navHandler = () => {
        if (window.scrollY < 300) {
            setShow(false);
        } else {
            setShow(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", navHandler);
        return () => {
            window.removeEventListener("scroll", navHandler);
        };
    }, []);

    const contactCtx = useContactContext();

    //
    const openContactModal = () => {
        contactCtx.dispatch({ type: ActionType.OPEN });
        console.log(contactCtx.state.isOpen);
    };

    return (
        <>
            <header
                className={`header ${styles.header} ${show && "show-navbar"}`}
            >
                <div className={`container ${styles.container}`}>
                    <div className={styles["img-container"]}>
                        <Image
                            src={"/images/logo.png"}
                            fill
                            style={{
                                objectFit: "contain",
                                objectPosition: "left",
                            }}
                            alt="logo"
                            quality={75}
                        />
                    </div>
                    <nav className={`${styles.nav} flex`}>
                        <ul className="flex">
                            <li className={styles["nav-link"]}>
                                <Link
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Tjenester
                                </Link>
                            </li>
                            <li className={styles["nav-link"]}>
                                <Link
                                    to="prices"
                                    spy={true}
                                    smooth={true}
                                    offset={-150}
                                    duration={500}
                                >
                                    Priser
                                </Link>
                            </li>
                            <li className={styles["nav-link"]}>
                                <Link
                                    to="course"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Kurs
                                </Link>
                            </li>
                            <li className={styles["nav-link"]}>
                                <a onClick={() => openContactModal()}>
                                    Kontakt
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className={`social ${styles.social} ${show && "show-social"}`}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/NanoDetailingAS"
                >
                    <BsFacebook />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/nano_detailing_trondheim/"
                >
                    <BsInstagram />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://m.me/NanoDetailingAS"
                >
                    <BsMessenger />
                </a>
            </div>
        </>
    );
};

export default Header;
