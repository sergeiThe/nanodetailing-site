import { LinkHex } from "@/components/link-hexagonal";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { open } from "@/shared/model/serviceSlice";

const HexLinks = () => {
    const width = 200;
    const height = 90;

    const dispatch = useAppDispatch();

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
                onClick={() => dispatch(open("polering"))}
            />
            <LinkHex
                className={`md:top-[90px] top-[55px] md:right-[0px] right-[0px]`}
                image="volk2.png"
                linkContent="PPF"
                onClick={() => dispatch(open("ppf"))}
            />
            <LinkHex
                className={`md:top-[90px] top-[55px] md:right-[200px] right-[120px]`}
                image="audi.png"
                linkContent="Solfilm"
                onClick={() => dispatch(open("solfilm"))}
            />
            <LinkHex
                className={`md:top-[90px] top-[55px] md:right-[400px] right-[240px]`}
                image="tesla1.png"
                linkContent="Helfoliering"
                onClick={() => dispatch(open("helfoliering"))}
            />
            <LinkHex
                className={`md:top-[270px]  top-[170px] md:right-[100px] right-[60px]`}
                image="tesla2.png"
                linkContent="Chrome delete"
                onClick={() => dispatch(open("chrome-delete"))}
            />
        </div>
    );
};

export default HexLinks;
