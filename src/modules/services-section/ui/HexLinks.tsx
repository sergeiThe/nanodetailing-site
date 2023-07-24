import { LinkHex } from "@/components/link-hexagonal";

const HexLinks = () => {
    const width = 200;
    const height = 90;

    return (
        <div className={`relative max-w-[600px] mx-auto mt-40`}>
            <LinkHex
                className={`top-[-90px] right-[300px]`}
                image="tesla3.png"
                linkContent="Keramisk lakkforsegling"
                onClick={() => alert("go to the service...")}
            />
            <LinkHex
                className={`top-[-90px] right-[100px]`}
                image="volk1.png"
                linkContent="Polering"
                onClick={() => alert("go to the service...")}
            />
            <LinkHex
                className={`top-[90px] right-[0px]`}
                image="volk2.png"
                linkContent="PPF"
                onClick={() => alert("go to the service...")}
            />
            <LinkHex
                className={`top-[90px] right-[200px]`}
                image="audi.png"
                linkContent="Solfilm"
                onClick={() => alert("go to the service...")}
            />
            <LinkHex
                className={`top-[90px] right-[400px]`}
                image="tesla1.png"
                linkContent="Helfoliering"
                onClick={() => alert("go to the service...")}
            />
            <LinkHex
                className={`top-[270px] right-[100px]`}
                image="tesla2.png"
                linkContent="Chrome delete"
                onClick={() => alert("go to the service...")}
            />
        </div>
    );
};

export default HexLinks;
