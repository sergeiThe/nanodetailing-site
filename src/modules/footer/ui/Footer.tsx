"use client";
import { Button } from "@/shared/ui/button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter();

    return (
        <footer className="relative bg-gray-800 opacity-90 md:px-10 px-4 pt-10  flex flex-col">
            <Image
                alt="footerbg"
                fill
                style={{ objectFit: "cover" }}
                src={"/images/bgfooter.jpg"}
                className="-z-10 brightness-[20%]"
            />
            <div className="flex md:flex-row flex-col-reverse max-w-[1300px] mx-auto gap-10">
                <div className="text-white md:basis-1/2 ">
                    <p className="mb-5">
                        Nanodetailing ble grunnlagt med ett mål i tankene - å gi
                        hver eneste kunde ærlig, personlig oppmerksomhet for å
                        sikre at de får den beste servicen som mulig. Fordi vi
                        bryr oss om detaljene, er det viktig for oss at kundene
                        våre vet hvem de jobber med. Når du tar med deg bilen
                        din til oss i Trondheim, får du vår ultimate
                        oppmerksomhet på detaljer.
                    </p>

                    <Button
                        text="Kontaktskjema"
                        variant="primary"
                        onClick={() => router.push("/kontakt")}
                    />
                </div>
                <div className="md:basis-1/2">
                    <div className="relative md:h-full h-32 -ml-12">
                        <Image
                            alt="logo"
                            fill
                            style={{ objectFit: "contain" }}
                            src={"/images/logo.png"}
                            quality={75}
                            className="z-10"
                        />
                    </div>
                </div>
            </div>
            <div className="text-gray-400 text-center border-t-2 border-gray-600 py-2 mt-5">
                Designet og utviklet av Sergei Medialics
            </div>
        </footer>
    );
};

export default Footer;
