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
                className={`md:top-[-90px] top-[-60px] md:right-[300px] right-[183px]`}
                image="tesla3.png"
                linkContent="Keramisk lakkforsegling"
                pageLink="/coating"
            />
            <LinkHex
                className={`md:top-[-90px] top-[-60px] md:right-[100px] right-[61px]`}
                image="volk1.png"
                linkContent="Polering"
                pageLink="/polering"
            />
            <LinkHex
                className={`md:top-[90px] top-[55px] md:right-[0px] right-[0px]`}
                image="volk2.png"
                linkContent="PPF"
                pageLink="/ppf"
            />
            <LinkHex
                className={`md:top-[90px] top-[55px] md:right-[200px] right-[122px]`}
                image="audi.png"
                linkContent="Solfilm"
                onClick={() => dispatch(open("solfilm"))}
            />
            <LinkHex
                className={`md:top-[90px] top-[285px] md:right-[400px] right-[122px]`}
                image="tesla1.png"
                linkContent="Helfoliering"
                onClick={() => dispatch(open("helfoliering"))}
            />
            <LinkHex
                className={`md:top-[270px]  top-[170px] md:right-[100px] right-[61px]`}
                image="tesla2.png"
                linkContent="Chrome delete"
                onClick={() => dispatch(open("chrome-delete"))}
            />
        </div>
    );
};

export default HexLinks;
