import Link from "next/link";

interface Props {
    to: string;
    name: string;
}

const MenuLink = (props: Props) => {
    return (
        <li className="cursor-pointer hover:text-red-700">
            <Link href={props.to}>{props.name}</Link>
        </li>
    );
};

export default MenuLink;
