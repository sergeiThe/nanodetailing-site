import { LinkHex } from "@/components/link-hexagonal";

const HexLinks = () => {
    const width = 200;
    const height = 90;

    return (
        <div className={`relative max-w-[${width * 3}px] mx-auto mt-40`}>
            <LinkHex
                className={`top-[-${height}px] right-[${width * 1.5}px]`}
                image="tesla3.png"
                linkContent="Keramisk lakkforsegling"
                onClick={() => alert("go to the service...")}
            />
            <LinkHex
                className={`top-[-${height}px] right-[${width * 0.5}px]`}
                image="volk1.png"
                linkContent="Polering"
                onClick={() => alert("go to the service...")}
            />
            <LinkHex
                className={`top-[${height}px] right-[${width * 0}px]`}
                image="volk2.png"
                linkContent="PPF"
                onClick={() => alert("go to the service...")}
            />
            <LinkHex
                className={`top-[${height}px] right-[${width * 1}px]`}
                image="audi.png"
                linkContent="Solfilm"
                onClick={() => alert("go to the service...")}
            />
            <LinkHex
                className={`top-[${height}px] right-[${width * 2}px]`}
                image="tesla1.png"
                linkContent="Helfoliering"
                onClick={() => alert("go to the service...")}
            />
            <LinkHex
                className={`top-[${height * 3}px] right-[${width * 0.5}px]`}
                image="tesla2.png"
                linkContent="Chrome delete"
                onClick={() => alert("go to the service...")}
            />
        </div>
    );
};

export default HexLinks;
