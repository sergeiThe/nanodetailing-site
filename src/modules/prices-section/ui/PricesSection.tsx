"use client";
import { Button } from "@/shared/ui/button/Button";
import Image from "next/image";

const PricesSection = () => {
    return (
        <section
            className="relative bg-slate-600 bg-opacity-30 py-20 md:px-10 px-4"
            id="prices"
        >
            <Image
                src={"/images/stripebg.jpg"}
                fill
                alt="bg"
                className="-z-10 brightness-[20%]"
                style={{ objectFit: "cover" }}
            />
            <div className="text-white">
                <div className="">
                    <h2 className="text-5xl text-center">Faste priser</h2>
                    <p className="max-w-[700px] text-center mx-auto py-6">
                        Vi har faste priser for enkelte bilmerker. Er ikke bilen
                        din på lista, ta kontakt med oss
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-x-10  max-w-[900px] mx-auto">
                        <Button
                            onClick={() => alert("opening prices...")}
                            text="TESLA"
                            variant="primary"
                        />
                        <Button
                            onClick={() => alert("opening prices...")}
                            text="NIO"
                            variant="primary"
                        />
                        <Button
                            onClick={() => alert("opening prices...")}
                            text="BYD"
                            variant="primary"
                        />
                        <Button
                            onClick={() => alert("opening prices...")}
                            text="VOYAH"
                            variant="primary"
                        />
                        <Button
                            onClick={() => alert("opening prices...")}
                            text="CITROEN DS7"
                            variant="primary"
                        />
                        <Button
                            onClick={() => alert("opening prices...")}
                            text="VOLVO XC40"
                            variant="primary"
                        />
                        <Button
                            onClick={() => alert("opening prices...")}
                            text="SKODA ENYAQ"
                            variant="primary"
                        />
                        <Button
                            onClick={() => alert("opening prices...")}
                            text="POLESTAR 2"
                            variant="primary"
                        />
                        <Button
                            onClick={() => alert("opening prices...")}
                            text="VOLKSWAGEN ID.4"
                            variant="primary"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricesSection;
