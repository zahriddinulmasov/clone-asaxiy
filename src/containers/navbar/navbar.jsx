import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavbarModal from "../../components/navbarModal/navbarModal";
import { mainInfoActions } from "../../store/commonData";

import {
  NavbarHamburger,
  NavbarItem,
  NavbarLink,
  NavbarList,
  NavbarWrapper,
} from "./navbar.styles";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Navbar = () => {
  const navbar_items = [
    {
      id: 1,
      name: "Скидки",
      sale: "discounts",
    },
    {
      id: 2,
      name: "Кондиционеры",
      sale: "air-conditioners",
    },
    {
      id: 3,
      name: "Новинки",
      sale: "news",
    },
    {
      id: 4,
      name: "Книги",
      sale: "kitoblar",
    },
    {
      id: 5,
      name: "Телефоны и гаджеты",
      sale: "telefonlar-va-gadjetlar",
    },
    {
      id: 6,
      name: "Ноутбуки",
      sale: "laptops",
    },
  ];

  const dispatch = useDispatch();

  function handleCategory(slug) {
    localStorage.setItem("slug", JSON.stringify(slug));
    dispatch(mainInfoActions.dataSlug(slug));
  }

  const isBtn = useSelector((state) => state.commonInfo.isBtn);

  function handleHamburger() {
    dispatch(mainInfoActions.navIsBtn(!isBtn));
  }

  return (
    <>
      <NavbarWrapper>
        <NavbarList>
          <NavbarItem>
            {isBtn ? (
              <NavbarHamburger onClick={handleHamburger}>
                {" "}
                <CloseIcon sx={{ color: "rgb(0, 141, 255)" }} /> Все категории
              </NavbarHamburger>
            ) : (
              <NavbarHamburger onClick={handleHamburger}>
                {" "}
                <MenuIcon sx={{ color: "rgb(0, 141, 255)" }} /> Все категории
              </NavbarHamburger>
            )}
          </NavbarItem>
          {navbar_items.map((item) => (
            <NavbarItem key={item.id}>
              <NavbarLink
                to={item.sale}
                onClick={() => handleCategory(item.sale)}
              >
                {item.name}
              </NavbarLink>
            </NavbarItem>
          ))}
        </NavbarList>
      </NavbarWrapper>

      <NavbarModal open={isBtn} />
    </>
  );
};

export default memo(Navbar);
