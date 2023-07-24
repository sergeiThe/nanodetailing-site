import MenuLink from "./MenuLink";

const Menu = () => {
    const openContactModal = () => {
        alert("Opening contact model");
    };
    return (
        <nav className="flex items-center">
            <ul className="flex gap-8 justify-center select-none font-bold">
                <MenuLink name="Tjenester" to="services" />
                <MenuLink name="Priser" to="prices" />
                <MenuLink name="Kurs" to="course" />

                <li className="cursor-pointer hover:text-red-700">
                    <span onClick={() => openContactModal()}>Kontakt</span>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
