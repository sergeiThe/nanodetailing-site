"use client";
import { Button } from "@/shared/ui/button/Button";
import Image from "next/image";
import HexLinks from "./HexLinks";

const HeroSection = () => {
    const openContactModule = () => {
        alert("Contact..");
    };

    return (
        <section className="h-screen px-10  flex items-center relative overflow-hidden z-0">
            <video
                className="absolute top-0  right-0 -z-20 min-w-full min-h-full brightness-[30%]"
                autoPlay
                playsInline
                loop
                muted
                preload="metadata"
            >
                <source src="/video/video.mp4" type="video/mp4" />
            </video>
            <div className="flex gap-10 items-center max-w-[1300px] mx-auto">
                <div className=" basis-1/2 flex flex-col gap-5 items-start">
                    <div className="relative h-52">
                        <Image
                            alt="logo"
                            fill
                            style={{ objectFit: "contain" }}
                            src={"/images/logo.png"}
                            quality={75}
                            priority
                            className=""
                        />
                    </div>
                    <div className="text-white">
                        <h1 className="text-5xl py-5">Nanodetailing</h1>
                        <p className="py-2">
                            Vi i NanoDetailing spesialiserer oss på kosmetisk
                            behandling av bil. Vår målsetning er å tilby deg
                            innsyn i våre tekniske løsninger og kompetanse for
                            at du skal kunne oppnå de beste resultatene så trygt
                            og effektivt som mulig.
                        </p>

                        <Button
                            style={{ marginTop: "10px" }}
                            text="Kontakt"
                            variant="primary"
                            onClick={openContactModule}
                        />
                    </div>
                </div>
                <div className="relative basis-1/2 h-full">
                    <HexLinks />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
