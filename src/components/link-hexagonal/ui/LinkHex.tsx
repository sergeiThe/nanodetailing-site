import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { Link as ScrollLink } from "react-scroll";

interface Props extends HTMLAttributes<HTMLDivElement> {
    linkContent: string;
    className?: string | undefined;
    image: string;
    anchor?: string | null | undefined;
    pageLink?: string;
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
                    <ScrollLink
                        to={props.anchor}
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="hex-link-anchor"
                    >
                        {props.linkContent}
                    </ScrollLink>
                )}
                {!props.anchor && !props.pageLink && (
                    <a className="hex-link-anchor">{props.linkContent}</a>
                )}
                {props.pageLink && (
                    <Link className="hex-link-anchor" href={props.pageLink}>
                        {props.linkContent}
                    </Link>
                )}
            </div>
        </div>
    );
};

export default LinkHex;
