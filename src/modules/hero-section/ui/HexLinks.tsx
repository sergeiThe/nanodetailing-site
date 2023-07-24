import { LinkHex } from "@/components/link-hexagonal";
import { useRouter } from "next/navigation";

const HexLinks = () => {
    const router = useRouter();

    return (
        <div className="relative bottom-20">
            <LinkHex
                className="top-[-101px] right-[303px]"
                linkContent="Kontakt"
                image="tesla2.png"
                onClick={() => router.push("/kontakt")}
            />
            <LinkHex
                className="top-[-101px] right-[101px]"
                linkContent="Tjenester"
                image="tesla1.png"
                anchor="services"
            />
            <LinkHex
                className="top-[81px] right-[0px]"
                linkContent="Faste priser"
                image="audi.png"
                anchor="prices"
            />
            <LinkHex
                className="top-[81px] right-[202px]"
                linkContent="Hendlex kurs"
                image="volk1.png"
                anchor="course"
            />
        </div>
    );
};

export default HexLinks;
