import { useRouter } from "next/navigation";
import MenuLink from "./MenuLink";

const Menu = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-center py-2">
      <ul className="flex gap-8 justify-center select-none font-bold list-none">
        <MenuLink name="Tjenester" to="/#services" />
        {/*<MenuLink name="Priser" to="/#prices" />*/}
        <MenuLink name="Kurs" to="/#course" />

        <li className="list-none py-0 cursor-pointer hover:text-red-700">
          <span onClick={() => router.push("/kontakt")}>Kontakt</span>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
