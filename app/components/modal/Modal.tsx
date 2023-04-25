"use client";
import React from "react";

import ContactModal from "./ContactModal";
import ReactDOM from "react-dom";
import { ActionType, useContactContext } from "@/app/store/contact-context";
import { useServiceContext } from "@/app/store/service-context";
import ServiceModal from "./ServiceModal";
import { usePricesContext } from "@/app/store/prices-context";
import PricesModal from "./PricesModal";
import { motion as m, AnimatePresence } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

export const Backdrop = () => {
    const contactCtx = useContactContext();

    const close = () => {
        contactCtx.dispatch({ type: ActionType.CLOSE });
    };

    return (
        <m.div variants={variants} className="backdrop" onClick={close}></m.div>
    );
};

const Modal = () => {
    const contactCtx = useContactContext();
    const serviceCtx = useServiceContext();
    const pricesCtx = usePricesContext();

    return (
        <>
            {/* {contactCtx.state.isOpen &&
                ReactDOM.createPortal(
                    <AnimatePresence>
                        <ContactModal />
                    </AnimatePresence>,
                    document.querySelector("#modal") as HTMLElement
                )}
            {contactCtx.state.isOpen &&
                ReactDOM.createPortal(
                    <AnimatePresence>
                        <Backdrop />
                    </AnimatePresence>,
                    document.querySelector("#backdrop") as HTMLElement
                )}

            {serviceCtx.state.name &&
                ReactDOM.createPortal(
                    <AnimatePresence>
                        <ServiceModal
                            name={serviceCtx.state.name}
                            content={serviceCtx.state.content!}
                            image={serviceCtx.state.image!}
                        />
                    </AnimatePresence>,
                    document.querySelector("#modal") as HTMLElement
                )}

            {pricesCtx.state.typeModal &&
                ReactDOM.createPortal(
                    <PricesModal
                        image={`/images/prices/${pricesCtx.state.typeModal}`}
                    />,
                    document.querySelector("#modal") as HTMLElement
                )} */}
            <AnimatePresence mode="wait">
                {contactCtx.state.isOpen && <ContactModal />}

                {serviceCtx.state.name && (
                    <ServiceModal
                        name={serviceCtx.state.name}
                        content={serviceCtx.state.content!}
                        image={serviceCtx.state.image!}
                    />
                )}

                {pricesCtx.state.typeModal && (
                    <PricesModal
                        image={`/images/prices/${pricesCtx.state.typeModal}`}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Modal;
