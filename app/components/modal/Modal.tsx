"use client";
import React from "react";

import ContactModal from "./ContactModal";
import ReactDOM from "react-dom";
import { ActionType, useContactContext } from "@/app/store/contact-context";
import { useServiceContext } from "@/app/store/service-context";
import ServiceModal from "./ServiceModal";
import { usePricesContext } from "@/app/store/prices-context";
import PricesModal from "./PricesModal";

export const Backdrop = () => {
    const contactCtx = useContactContext();

    const close = () => {
        contactCtx.dispatch({ type: ActionType.CLOSE });
    };

    return <div className="backdrop" onClick={close}></div>;
};

const Modal = () => {
    const contactCtx = useContactContext();
    const serviceCtx = useServiceContext();
    const pricesCtx = usePricesContext();

    return (
        <>
            {contactCtx.state.isOpen &&
                ReactDOM.createPortal(
                    <ContactModal />,
                    document.querySelector("#modal") as HTMLElement
                )}
            {contactCtx.state.isOpen &&
                ReactDOM.createPortal(
                    <Backdrop />,
                    document.querySelector("#backdrop") as HTMLElement
                )}

            {serviceCtx.state.name &&
                ReactDOM.createPortal(
                    <ServiceModal
                        name={serviceCtx.state.name}
                        content={serviceCtx.state.content!}
                        image={serviceCtx.state.image!}
                    />,
                    document.querySelector("#modal") as HTMLElement
                )}

            {pricesCtx.state.typeModal &&
                ReactDOM.createPortal(
                    <PricesModal
                        image={`/images/prices/${pricesCtx.state.typeModal}`}
                    />,
                    document.querySelector("#modal") as HTMLElement
                )}
        </>
    );
};

export default Modal;
