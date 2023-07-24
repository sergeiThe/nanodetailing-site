import { Link } from "react-scroll";

interface Props {
    to: string;
    name: string;
}

const MenuLink = (props: Props) => {
    return (
        <li className="cursor-pointer hover:text-red-700">
            <Link
                to={props.to}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                {props.name}
            </Link>
        </li>
    );
};

export default MenuLink;
