import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { close } from "@/shared/model/pricesSlice";
import { AnimatePresence, motion as m } from "framer-motion";
import Image from "next/image";
import { GrClose } from "react-icons/gr";

const PriceModal = () => {
    const currentPriceModal = useAppSelector((state) => state.prices.current);
    const dispatch = useAppDispatch();

    function handleClose() {
        dispatch(close());
    }
    return (
        <AnimatePresence mode="wait">
            {currentPriceModal && (
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    exit={{ opacity: 0 }}
                    className="h-screen w-full fixed bg-black bg-opacity-90 z-50 md:p-10 p-4 flex items-center"
                >
                    <span
                        onClick={handleClose}
                        className="rounded-full sm:p-3 p-1 bg-gray-300 cursor-pointer hover:bg-red-900 absolute sm:text-3xl text-xl sm:top-10 top-4 sm:right-10 right-4 z-50"
                    >
                        <GrClose />
                    </span>
                    <div className="h-[80vh] w-full relative">
                        <Image
                            alt="car"
                            fill
                            style={{ objectFit: "contain" }}
                            src={`/images/prices/${currentPriceModal}.jpg`}
                            quality={75}
                            priority
                            className="md:-ml-4 z-0"
                        />
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    );
};

export default PriceModal;
