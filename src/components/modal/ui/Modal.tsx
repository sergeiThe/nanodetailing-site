import { PriceModalContent } from "@/modules/price-modal";
import ServiceModalContent from "@/modules/service-modal/ui/ServiceModal";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Modal = () => {
    const [domReady, setDomReady] = useState<boolean>(false);
    const [currentModal, setCurrentModal] = useState<
        ReactNode | null | undefined
    >();

    // Check which modal is open
    const service = useAppSelector((state) => state.service.current);
    const price = useAppSelector((state) => state.prices.current);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (price !== null && price !== undefined) {
            setCurrentModal(<PriceModalContent />);
        } else if (service !== null && service !== undefined) {
            setCurrentModal(<ServiceModalContent />);
        } else {
            setCurrentModal("");
        }
        setDomReady(true);
    }, [service, price, dispatch]);

    return (
        domReady &&
        createPortal(
            currentModal,
            document.getElementById("modal") as HTMLElement
        )
    );
};

export default Modal;
