"use client";
import { Button } from "@/shared/ui/button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HexLinks from "./HexLinks";

const HeroSection = () => {
    const router = useRouter();

    return (
        <section className="min-h-screen md:px-10 px-4 pt-5  flex items-center relative overflow-hidden z-0">
            <video
                className="absolute top-0  right-0 -z-20 min-w-full min-h-full brightness-[30%] object-cover"
                autoPlay
                playsInline
                loop
                muted
                preload="metadata"
            >
                <source src="/video/video.mp4" type="video/mp4" />
            </video>
            <div className="flex md:flex-row flex-col gap-48 md:gap-10 items-center justify-between  max-w-[1300px] mx-auto">
                <div className="md:basis-1/2 flex flex-col gap-5 md:items-start items-center">
                    <div className="relative md:w-80 h-52 w-full shrink">
                        <Image
                            alt="logo"
                            fill
                            style={{ objectFit: "contain" }}
                            src={"/images/logo.png"}
                            quality={75}
                            priority
                            className="md:-ml-4"
                        />
                    </div>
                    <div className="text-white text-center md:text-left basis-full">
                        <h1 className="md:text-5xl text-3xl py-5">
                            Nanodetailing
                        </h1>
                        <p className="md:py-2 py-5 md:max-w-none max-w-[600px]">
                            Vi i NanoDetailing spesialiserer oss på kosmetisk
                            behandling av bil. Vår målsetning er å tilby deg
                            innsyn i våre tekniske løsninger og kompetanse for
                            at du skal kunne oppnå de beste resultatene så trygt
                            og effektivt som mulig.
                        </p>
                        <div className="mx-auto md:inline-block hidden">
                            <Button
                                style={{ marginTop: "10px" }}
                                text="Kontakt"
                                variant="primary"
                                onClick={() => router.push("/kontakt")}
                            />
                        </div>
                    </div>
                </div>
                <div className="relative md:basis-1/2 h-full min-h-[200px] md:min-h-fit">
                    <HexLinks />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
