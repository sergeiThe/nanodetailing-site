"use client";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { open } from "@/shared/model/pricesSlice";
import { Button } from "@/shared/ui/button/Button";
import Image from "next/image";

const PricesSection = () => {
    const dispatch = useAppDispatch();
    return (
        <section
            className="relative bg-slate-600 bg-opacity-30 py-20 md:px-10 px-8"
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
                        din på lista, ta kontakt med oss!
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-x-10  max-w-[900px] mx-auto">
                        <Button
                            onClick={() => dispatch(open("tesla"))}
                            text="TESLA"
                            variant="primary"
                        />
                        <Button
                            onClick={() => dispatch(open("nio"))}
                            text="NIO"
                            variant="primary"
                        />
                        <Button
                            onClick={() => dispatch(open("byd"))}
                            text="BYD"
                            variant="primary"
                        />
                        <Button
                            onClick={() => dispatch(open("voyah"))}
                            text="VOYAH"
                            variant="primary"
                        />
                        <Button
                            onClick={() => dispatch(open("citroen-ds7"))}
                            text="CITROEN DS7"
                            variant="primary"
                        />
                        <Button
                            onClick={() => dispatch(open("volvo-xc40"))}
                            text="VOLVO XC40"
                            variant="primary"
                        />
                        <Button
                            onClick={() => dispatch(open("skoda-enyaq"))}
                            text="SKODA ENYAQ"
                            variant="primary"
                        />
                        <Button
                            onClick={() => dispatch(open("polestar-2"))}
                            text="POLESTAR 2"
                            variant="primary"
                        />
                        <Button
                            onClick={() => dispatch(open("volkswagen-id.4"))}
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
