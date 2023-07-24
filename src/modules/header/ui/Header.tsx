"use client";
import { AnimatePresence, motion as m } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Menu from "./Menu";

interface Props {
    offsetBeforeShow: number;
}

const Header = (props: Props) => {
    // open nav
    const [show, setShow] = useState<boolean>(false);

    const router = useRouter();

    const navHandler = () => {
        if (window.scrollY < props.offsetBeforeShow) {
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

    //

    return (
        <AnimatePresence mode="wait">
            {show && (
                <m.header
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    exit={{ y: -100 }}
                    className="shadow-sm shadow-slate-200
                    bg-white py-[2px] px-10 fixed w-full top-0 right-0 z-20"
                >
                    <div className="max-w-[1300px] mx-auto justify-center sm:justify-between flex flex-col sm:flex-row">
                        <div
                            onClick={() => router.push("/")}
                            className="relative basis-1/2 h-10 cursor-pointer"
                        >
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
                        <Menu />
                    </div>
                </m.header>
            )}
        </AnimatePresence>
    );
};

export default Header;
