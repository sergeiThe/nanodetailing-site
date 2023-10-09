import Link from "next/link";

interface Props {
  to: string;
  name: string;
}

const MenuLink = (props: Props) => {
  return (
    <li className="py-0 cursor-pointer hover:text-red-700 list-none">
      <Link href={props.to}>{props.name}</Link>
    </li>
  );
};

export default MenuLink;
