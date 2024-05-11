import { LinkHex } from "@/components/link-hexagonal";
import { useRouter } from "next/navigation";

const HexLinks = () => {
  const router = useRouter();

  return (
    <div className="relative bottom-20 md:translate-x-0 translate-x-[150px]">
      <LinkHex
        className="md:top-[-101px] top-[-60px] md:right-[303px] right-[188px]"
        linkContent="Kontakt"
        image="tesla2.png"
        onClick={() => router.push("/kontakt")}
      />
      <LinkHex
        className="md:top-[-101px] top-[-60px] md:right-[101px] right-[61px]"
        linkContent="Tjenester"
        image="tesla1.png"
        anchor="services"
      />

      {/*<LinkHex
        className="md:top-[81px] top-[60px] md:right-[0px] right-[-2px]"
        linkContent="Faste priser"
        image="audi.png"
        anchor="prices"
      />*/}
      <LinkHex
        className="md:top-[81px] top-[60px] md:right-[202px] right-[125px]"
        linkContent="Hendlex kurs"
        image="volk1.png"
        anchor="course"
      />
    </div>
  );
};

export default HexLinks;
