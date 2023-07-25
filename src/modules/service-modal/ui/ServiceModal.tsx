"use client";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { close } from "@/shared/model/serviceSlice";
import { AnimatePresence, motion as m } from "framer-motion";
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import { ServiceBodyContent, services } from "../consts/services";

const ServiceModalContent = () => {
    const dispatch = useAppDispatch();
    const currentServiceModal = useAppSelector(
        (state) => state.service.current
    );

    const content = currentServiceModal
        ? Object.keys(services[currentServiceModal]!.content).map((p) => {
              if (p) {
                  return (
                      <p key={p}>
                          {currentServiceModal &&
                              (
                                  services[currentServiceModal]!
                                      .content as ServiceBodyContent
                              )[p]}
                      </p>
                  );
              }
          })
        : "";

    function handleClose() {
        dispatch(close());
    }

    return (
        <AnimatePresence mode="wait">
            {currentServiceModal && (
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    exit={{ opacity: 0 }}
                    className="h-screen w-full fixed bg-black bg-opacity-90 z-50 sm:p-10 p-4 flex items-center overflow-auto"
                >
                    <span
                        onClick={handleClose}
                        className="rounded-full sm:p-3 p-1 bg-gray-300 cursor-pointer hover:bg-red-900 absolute sm:text-3xl text-xl sm:top-10 top-4 sm:right-10 right-4 z-50"
                    >
                        <GrClose />
                    </span>
                    <div className="max-w-[1300px] mx-auto flex relative gap-5 z-10">
                        <div className="md:basis-1/2">
                            <h3 className="text-3xl sm:text-5xl text-white py-10">
                                {currentServiceModal &&
                                    services[currentServiceModal]?.name}
                            </h3>
                            <div className="text-white flex flex-col gap-4 text-sm">
                                {content}
                            </div>
                        </div>
                        <div className="relative basis-1/2 hidden md:block">
                            {currentServiceModal && (
                                <Image
                                    alt="car"
                                    fill
                                    style={{ objectFit: "contain" }}
                                    src={`/images/${services[currentServiceModal]?.image}`}
                                    quality={75}
                                    priority
                                    className="md:-ml-4 z-0"
                                />
                            )}
                        </div>
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    );
};

export default ServiceModalContent;
