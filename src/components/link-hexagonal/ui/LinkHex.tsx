import Image from "next/image";
import { HTMLAttributes } from "react";
import { Link } from "react-scroll";

interface Props extends HTMLAttributes<HTMLDivElement> {
    linkContent: string;
    className?: string | undefined;
    image: string;
    anchor?: string | null | undefined;
}

const LinkHex = (props: Props) => {
    return (
        <div onClick={props.onClick} className={`hex-link ${props.className}`}>
            <div className="hex-link-img">
                <Image
                    alt={props.linkContent}
                    fill
                    style={{ objectFit: "contain" }}
                    src={"/images/" + props.image}
                />
                {props.anchor && (
                    <Link
                        to={props.anchor}
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="hex-link-anchor"
                    >
                        {props.linkContent}
                    </Link>
                )}
                {!props.anchor && (
                    <a className="hex-link-anchor">{props.linkContent}</a>
                )}
            </div>
        </div>
    );
};

export default LinkHex;
