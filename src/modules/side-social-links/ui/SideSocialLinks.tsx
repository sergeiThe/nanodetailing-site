"use client";
import LinkExternal from "@/components/link-external/LinkExternal";
import { AnimatePresence, motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsMessenger } from "react-icons/bs";

const SideSocialLinks = () => {
    const [show, setShow] = useState<boolean>(false);

    const navHandler = () => {
        if (window.scrollY < 200) {
            setShow(false);
        } else {
            setShow(true);
        }
    };

    useEffect(() => {
        if (window.scrollY < 200) {
            setShow(false);
        } else {
            setShow(true);
        }

        window.addEventListener("scroll", navHandler);
        return () => {
            window.removeEventListener("scroll", navHandler);
        };
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed right-1 sm:right-5 sm:top-[40vh] top-[40vh] z-40 flex flex-col gap-4 text-gray-500 text-2xl"
                >
                    <LinkExternal
                        className="hover:text-red-700 cursor-pointer"
                        linkContent={<BsFacebook />}
                        href="https://www.facebook.com/NanoDetailingAS"
                    />
                    <LinkExternal
                        className="hover:text-red-700 cursor-pointer"
                        linkContent={<BsInstagram />}
                        href="https://www.instagram.com/nano_detailing_trondheim/"
                    />
                    <LinkExternal
                        className="hover:text-red-700 cursor-pointer"
                        linkContent={<BsMessenger />}
                        href="http://m.me/NanoDetailingAS"
                    />
                </m.div>
            )}
        </AnimatePresence>
    );
};

export default SideSocialLinks;
