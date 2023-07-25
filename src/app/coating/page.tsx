import { BgVideo } from "@/components/bg-video";
import { ContactForm } from "@/components/contact-form";
import { Header } from "@/modules/header";
import Image from "next/image";

const CoatingPage = () => {
    return (
        <>
            <Header offsetBeforeShow={100} />
            <BgVideo
                content={
                    <div className="flex flex-col gap-10">
                        <div className="h-32 w-full relative">
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
                        <h1 className="text-white sm:text-5xl text-xl text-center">
                            Keramisk lakkforsegling
                        </h1>
                    </div>
                }
                url="https://www.youtube.com/embed/POF8iE9_t48?mute=1&autoplay=1&controls=0&showinfo=0&autohide=1&loop=1&playlist=POF8iE9_t48"
            />

            <div className="max-w-[1300px] mx-auto sm:p-14 p-8">
                <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-10  sm:py-14 py-8">
                    <div>
                        <h2 className="text-3xl py-3">
                            Hva er en keramisk lakkforsegling eller coating?
                        </h2>
                        <p className="py-2">
                            Keramisk lakkforsegling er en avansert metode der
                            man bruker nanoteknologi og legger et lag kvarts på
                            lakkoverflaten. Overflatespenningen i lakken endres
                            slik at den vannavvisende(hydrofobiske) effekten
                            blir optimal.
                        </p>
                    </div>
                    <div className="basis-1/2 ">
                        <div className="min-h-[300px] w-full relative rounded-xl overflow-hidden">
                            <Image
                                alt="logo"
                                fill
                                style={{ objectFit: "cover" }}
                                src={"/images/coating/coating4.webp"}
                                quality={75}
                                priority
                                className=""
                            />
                        </div>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-10  sm:py-14 py-8">
                    <div>
                        <div className="min-h-[300px] w-full relative rounded-xl overflow-hidden">
                            <Image
                                alt="logo"
                                fill
                                style={{ objectFit: "cover" }}
                                src={"/images/coating/coating3.webp"}
                                quality={75}
                                priority
                                className=""
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl py-3">Hvem passer den for?</h2>
                        <p className="py-2">
                            Behandlingens varighet er lengre enn for syntetisk
                            lakkforsegling. Lakkforsegling passer for deg som
                            ønsker en lettere bilvedlikehold, samt redusere
                            bilens verditap.
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-10  sm:py-14 py-8">
                    <div>
                        <h2 className="text-3xl py-3">
                            Hvorfor nemlig coating?
                        </h2>
                        <p className="py-2">
                            Du lurer kanskje på hva fordelene med å ha et
                            keramisk belegg bilen er. Enkelt sagt kan et
                            keramisk belegg betraktes som et langsiktig
                            alternativ til tradisjonelle voks- eller
                            malingsforseglinger. Å gi enestående beskyttelse for
                            noen år i stedet for uker eller måneder betyr at du
                            vil ha det mye lettere for å vedlikeholde
                            kjøretøyets utseende. Et keramisk belegg vil holde
                            lakken renere i lengre tid, noe som resulterer i
                            mindre tid på å vaske bilen og mer tid til å nyte
                            den.
                        </p>
                    </div>
                    <div>
                        <div className="min-h-[300px] w-full relative rounded-xl overflow-hidden">
                            <Image
                                alt="logo"
                                fill
                                style={{ objectFit: "cover" }}
                                src={"/images/coating/coating2.webp"}
                                quality={75}
                                priority
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-8">
                <h2 className="text-3xl py-3 text-center">Kontakt</h2>
                <ContactForm />
            </div>
        </>
    );
};

export default CoatingPage;
