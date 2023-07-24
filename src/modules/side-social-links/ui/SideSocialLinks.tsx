import LinkExternal from "@/components/link-external/LinkExternal";
import { BsFacebook, BsInstagram, BsMessenger } from "react-icons/bs";

const SideSocialLinks = () => {
    return (
        <div className="">
            <LinkExternal
                linkContent={<BsFacebook />}
                href="https://www.facebook.com/NanoDetailingAS"
            />
            <LinkExternal
                linkContent={<BsInstagram />}
                href="https://www.instagram.com/nano_detailing_trondheim/"
            />
            <LinkExternal
                linkContent={<BsMessenger />}
                href="http://m.me/NanoDetailingAS"
            />
        </div>
    );
};

export default SideSocialLinks;
