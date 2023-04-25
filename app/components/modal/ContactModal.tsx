"use client";
import React from "react";
import styles from "./ContactModal.module.scss";
import { ActionType, useContactContext } from "@/app/store/contact-context";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Backdrop } from "./Modal";

// Data
const title = "Kontaktskjema";
const telephone = "+47 405 90 005";
const email = "post@nanodetailing.no";
const address = "Vestre Rosten 102, 7025 Tiller";

// Animation variants
const variants = {
    hidden: { x: 1000 },
    show: {
        x: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
            ease: "easeOut",
            bounce: "none",
            duration: 0.3,
        },
    },
};

const ContactModal = () => {
    const contactContext = useContactContext();

    const close = () => {
        contactContext.dispatch({ type: ActionType.CLOSE });
    };

    const sendMail = (e: React.FormEvent) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_te8odrw",
            "template_mapsgnw",
            e.target as HTMLFormElement,
            "xhZxJ0D-bhia6zE1u"
        );

        setTimeout(() => {
            close();
        }, 1000);
    };

    return (
        <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            key={"contact-modal"}
            variants={variants}
            className={styles.modal}
        >
            <Backdrop />
            <div className={styles.left}>
                <div className={styles.close} onClick={close}>
                    Lukk X
                </div>

                <ul className={styles["top-links"]}>
                    <li>
                        <a href={`tel:${telephone}`}>{telephone}</a>
                    </li>
                    <li>
                        <a href={`mailto:${email}`}>{email}</a>
                    </li>
                    <li>
                        <a href={``}>{address}</a>
                    </li>
                </ul>

                <h2>{title}</h2>

                <form className={styles.form} onSubmit={sendMail}>
                    <label htmlFor="navn">Navn</label>
                    <input id="navn" name="navn" type="text" required />

                    <label htmlFor="epost">E-post</label>
                    <input id="epost" name="epost" type="email" required />

                    <label htmlFor="telefon">Telefon</label>
                    <input id="telefon" name="telefon" type="text" />

                    <label htmlFor="beskjed">Beskjed</label>
                    <textarea id="beskjed" name="beskjed"></textarea>

                    <button type="submit" className="btn">
                        Send
                    </button>
                </form>

                <ul className={styles["bottom-links"]}>
                    <li>
                        <a
                            onClick={() => {
                                console.log("Link clicked");
                            }}
                        >
                            Personvernerklæring
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => {
                                console.log("Link clicked");
                            }}
                        >
                            Cookies
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.right}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1788.477022556059!2d10.370156215718598!3d63.367880887906594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d2f49ac1a4a63%3A0x74c2dd51b4a4a12a!2sNano%20Detailing%20AS!5e0!3m2!1sen!2sno!4v1681298396636!5m2!1sen!2sno&zoom=10"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </motion.div>
    );
};

export default ContactModal;
