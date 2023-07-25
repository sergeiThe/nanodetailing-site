import { AnchorHTMLAttributes, ReactNode } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    linkContent: string | ReactNode;
}

const LinkExternal = (props: Props) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.href}
            className={props.className}
        >
            {props.linkContent}
        </a>
    );
};

export default LinkExternal;
