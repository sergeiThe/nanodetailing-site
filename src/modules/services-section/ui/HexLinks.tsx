import { LinkHex } from "@/components/link-hexagonal";

const HexLinks = () => {
    const width = 200;
    const height = 90;

    return (
        <div
            className={`relative md:max-w-[600px] max-w-[380px] mx-auto mt-40`}
        >
            <LinkHex
                className={`md:top-[-90px] top-[-60px] md:right-[300px] right-[180px]`}
                image="tesla3.png"
                linkContent="Keramisk lakkforsegling"
                onClick={() => alert("go to the service...")}
            />
            <LinkHex
                className={`md:top-[-90px] top-[-60px] md:right-[100px] right-[60px]`}
                image="volk1.png"
                linkContent="Polering"
                onClick={() => alert("go to the service...")}
            />
            <LinkHex
                className={`md:top-[90px] top-[55px] md:right-[0px] right-[0px]`}
                image="volk2.png"
                linkContent="PPF"
                onClick={() => alert("go to the service...")}
            />
            <LinkHex
                className={`md:top-[90px] top-[55px] md:right-[200px] right-[120px]`}
                image="audi.png"
                linkContent="Solfilm"
                onClick={() => alert("go to the service...")}
            />
            <LinkHex
                className={`md:top-[90px] top-[55px] md:right-[400px] right-[240px]`}
                image="tesla1.png"
                linkContent="Helfoliering"
                onClick={() => alert("go to the service...")}
            />
            <LinkHex
                className={`md:top-[270px]  top-[170px] md:right-[100px] right-[60px]`}
                image="tesla2.png"
                linkContent="Chrome delete"
                onClick={() => alert("go to the service...")}
            />
        </div>
    );
};

export default HexLinks;
